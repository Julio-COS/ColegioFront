import { Component } from '@angular/core';
import { ComprobantePago } from '../../../../../interface/ComprobantePago';
import { ConnectionService } from '../../../../../service/connection.service';
import { Router } from '@angular/router';
import { Accion, getEntityPropiedades } from '../../../../../interface/actionTableColumn';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-read-comprobante-pago',
  templateUrl: './read-comprobante-pago.component.html',
  styleUrl: './read-comprobante-pago.component.css'
})
export class ReadComprobantePagoComponent {
  dataSource:ComprobantePago[]=[];
  columnas:string[]=[];
  acciones:string[]=[];
  title:string="Comprobante Pago";

  constructor(
    private connectionService:ConnectionService, 
    private router:Router
  ){}

  ngOnInit(): void {
    this.columnas=getEntityPropiedades(this.title);
    this.acciones = ['Imprimir'];
    this.connectionService.getComprobantePagos().subscribe(data=>{
      this.dataSource=data;
    })
  }
  onAction(accion:Accion){
    if(accion.accion == 'Editar'){
      this.update(accion.fila);
    } else if(accion.accion=='Eliminar'){
      this.delete(accion.fila.idComprobante);
    }
  } 

  update(data:any){
    this.router.navigate([this.router.url+'/update', data.idComprobante]);
  }
  delete(id:string){
    Swal.fire({
      title: '¿Estas seguro que deseas eliminar?',
      showDenyButton: true,
      confirmButtonText: 'Eliminar',
      denyButtonText: `Cancelar`,
  }).then((result) => {
      if (result.isConfirmed) {
        this.connectionService.deleteComprobantePago(id).subscribe(
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
