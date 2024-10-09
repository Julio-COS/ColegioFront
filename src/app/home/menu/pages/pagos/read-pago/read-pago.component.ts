import { Component } from '@angular/core';
import { Pago } from '../../../../../interface/Pago';
import { ConnectionService } from '../../../../../service/connection.service';
import { Router } from '@angular/router';
import { Accion, getEntityPropiedades } from '../../../../../interface/actionTableColumn';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-read-pago',
  templateUrl: './read-pago.component.html',
  styleUrl: './read-pago.component.css'
})
export class ReadPagoComponent {
  dataSource:Pago[]=[];
  columnas:string[]=[];
  acciones:string[]=[];
  title:string="Pago";

  constructor(
    private connectionService:ConnectionService, 
    private router:Router){}

  ngOnInit(): void {
    this.columnas=getEntityPropiedades(this.title);
    this.acciones = ['Pagar'];
    this.connectionService.getPagos().subscribe(data=>{
      this.dataSource=data;
    })
  }
  onAction(accion:Accion){
    if(accion.accion == 'Editar'){
      this.update(accion.fila);
    } else if(accion.accion=='Eliminar'){
      this.delete(accion.fila.idPago);
    } else if(accion.accion=='Pagar'){
      this.create(accion.fila.idPago);
    }
  } 

  update(data:any){
    this.router.navigate([this.router.url+'/update', data.idPago]);
  }
  delete(id:string){
    Swal.fire({
      title: '¿Estas seguro que deseas eliminar?',
      showDenyButton: true,
      confirmButtonText: 'Eliminar',
      denyButtonText: `Cancelar`,
  }).then((result) => {
      if (result.isConfirmed) {
        this.connectionService.deletePago(id).subscribe(
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

  create(id:string){
    this.router.navigate([this.router.url+'/create', id]);
  }
}
