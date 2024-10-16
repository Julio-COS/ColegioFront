import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../../../../../service/connection.service';
import { Aula } from '../../../../../interface/Aula';
import { Accion, getEntityPropiedades } from '../../../../../interface/actionTableColumn';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { GeneratePDFService } from '../../../../../service/generatePDF.service';

@Component({
  selector: 'app-read-aula',
  templateUrl: './read-aula.component.html',
  styleUrl: './read-aula.component.css'
})
export class ReadAulaComponent implements OnInit {
  dataSource:Aula[]=[];
  columnas:string[]=[];
  acciones:string[]=[];
  title:string="Aula";

  constructor(
    private connectionService:ConnectionService,
    private router:Router,
    private pdfService:GeneratePDFService
  ){}

  ngOnInit(): void {
    this.columnas=getEntityPropiedades(this.title);
    this.acciones = ['Editar', 'Eliminar', 'Imprimir'];
    this.connectionService.getAulas().subscribe(data=>{
      this.dataSource=data;
    })
  }
  onAction(accion:Accion){
    if(accion.accion == 'Editar'){
      this.update(accion.fila);
    } else if(accion.accion=='Eliminar'){
      this.delete(accion.fila.idAula);
    } else if(accion.accion=='Imprimir'){
      this.reporteAula(accion.fila.idAula);
    }
  } 

  update(data:any){
    this.router.navigate([this.router.url+'/update', data.idAula]);
  }
  delete(id:string){
    Swal.fire({
      title: '¿Estas seguro que deseas eliminar?',
      showDenyButton: true,
      confirmButtonText: 'Eliminar',
      denyButtonText: `Cancelar`,
  }).then((result) => {
      if (result.isConfirmed) {
        this.connectionService.deleteAula(id).subscribe(
              (response) => {
                  if (response.isSuccess) {
                      Swal.fire(response.message,'', 'success');
                      location.reload()
                      return;
                  } else {
                      console.error(response.message);
                  }
              },
              (error) => {
                  console.error(error);
              });
      } else {
          return;
      }
    });
  }

  reporteAula(id:string){
    this.connectionService.getReporteAula(id).subscribe(data=>{
      this.connectionService.getAula(id).subscribe(dataAula=>{
        this.pdfService.reportePDF(data,dataAula);
      })
    })
  }
}
