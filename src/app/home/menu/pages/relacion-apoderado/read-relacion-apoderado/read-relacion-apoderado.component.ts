import { Component, OnInit } from '@angular/core';
import { RelacionApoderado } from '../../../../../interface/RelacionApoderado';
import { ConnectionService } from '../../../../../service/connection.service';
import { Router } from '@angular/router';
import { Accion, getEntityPropiedades } from '../../../../../interface/actionTableColumn';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-read-relacion-apoderado',
  templateUrl: './read-relacion-apoderado.component.html',
  styleUrl: './read-relacion-apoderado.component.css'
})
export class ReadRelacionApoderadoComponent implements OnInit{
  dataSource:RelacionApoderado[]=[];
  columnas:string[]=[];
  acciones:string[]=[];
  title:string="Relacion Apoderado";

  constructor(
    private connectionService:ConnectionService,
     private router:Router){}

  ngOnInit(): void {
    this.columnas=getEntityPropiedades(this.title);
    this.acciones = ['Editar', 'Eliminar'];
    this.connectionService.getRelacionApoderados().subscribe(data=>{
      this.dataSource=data;
    })
  }
    
  onAction(accion:Accion){
    if(accion.accion == 'Editar'){
      this.update(accion.fila);
    } else if(accion.accion=='Eliminar'){
      this.delete(accion.fila.idRelacionApoderado);
    }
  } 

  update(data:any){
    this.router.navigate([this.router.url+'/update', data.idRelacionApoderado]);
  }
  delete(id:string){
    Swal.fire({
      title: '¿Estas seguro que deseas eliminar?',
      showDenyButton: true,
      confirmButtonText: 'Eliminar',
      denyButtonText: `Cancelar`,
  }).then((result) => {
      if (result.isConfirmed) {
        this.connectionService.deleteApoderado(id).subscribe(
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
}
