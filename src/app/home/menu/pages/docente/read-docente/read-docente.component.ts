import { Component } from '@angular/core';
import { Docente } from '../../../../../interface/Docente';
import { ConnectionService } from '../../../../../service/connection.service';
import { Accion, getEntityPropiedades } from '../../../../../interface/actionTableColumn';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-read-docente',
  templateUrl: './read-docente.component.html',
  styleUrl: './read-docente.component.css'
})
export class ReadDocenteComponent {
  dataSource:Docente[]=[];
  columnas:string[]=[];
  acciones:string[]=[];
  title:string="Docente";

  constructor(private connectionService:ConnectionService, private router:Router){}

  ngOnInit(): void {
    this.columnas=getEntityPropiedades(this.title);
    this.acciones = ['Editar', 'Eliminar'];
    this.connectionService.getDocentes().subscribe(data=>{
      this.dataSource=data;
    })
  }
  onAction(accion:Accion){
    if(accion.accion == 'Editar'){
      this.update(accion.fila);
    } else if(accion.accion=='Eliminar'){
      this.delete(accion.fila.idDocente);
    }
  } 

  update(data:any){
    this.router.navigate([this.router.url+'/update', data.idDocente]);
  }
  delete(id:string){
    Swal.fire({
      title: '¿Estas seguro que deseas eliminar?',
      showDenyButton: true,
      confirmButtonText: 'Eliminar',
      denyButtonText: `Cancelar`,
  }).then((result) => {
      if (result.isConfirmed) {
        this.connectionService.deleteDocente(id).subscribe(
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
