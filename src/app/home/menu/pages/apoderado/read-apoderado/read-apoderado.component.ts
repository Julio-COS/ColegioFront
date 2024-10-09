import { Component } from '@angular/core';
import { Apoderado } from '../../../../../interface/Apoderado';
import { ConnectionService } from '../../../../../service/connection.service';
import { Router } from '@angular/router';
import { Accion, getEntityPropiedades } from '../../../../../interface/actionTableColumn';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-read-apoderado',
  templateUrl: './read-apoderado.component.html',
  styleUrl: './read-apoderado.component.css'
})
export class ReadApoderadoComponent {
  dataSource:Apoderado[]=[];
  columnas:string[]=[];
  acciones:string[]=[];
  title:string="Apoderado";

  constructor(
    private connectionService:ConnectionService,
     private router:Router){}

  ngOnInit(): void {
    this.columnas=getEntityPropiedades(this.title);
    this.acciones = ['Editar', 'Eliminar'];
    this.connectionService.getApoderados().subscribe(data=>{
      this.dataSource=data;
    })
  }
    
  onAction(accion:Accion){
    if(accion.accion == 'Editar'){
      this.update(accion.fila);
    } else if(accion.accion=='Eliminar'){
      this.delete(accion.fila.idApoderado);
    }
  } 

  update(data:any){
    this.router.navigate([this.router.url+'/update', data.idApoderado]);
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
