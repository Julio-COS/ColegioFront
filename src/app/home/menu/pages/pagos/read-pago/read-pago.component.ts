import { Component } from '@angular/core';
import { Pago } from '../../../../../interface/Pago';
import { ConnectionService } from '../../../../../service/connection.service';
import { Router } from '@angular/router';
import { Accion, getEntityPropiedades } from '../../../../../interface/actionTableColumn';

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
    this.connectionService.deletePago(id).subscribe();
    location.reload()
  }

  create(id:string){
    this.router.navigate([this.router.url+'/create', id]);
  }
}
