import { Component } from '@angular/core';
import { Curso } from '../../../../../interface/Curso';
import { ConnectionService } from '../../../../../service/connection.service';
import { Accion, getEntityPropiedades } from '../../../../../interface/actionTableColumn';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-read-curso',
  templateUrl: './read-curso.component.html',
  styleUrl: './read-curso.component.css'
})
export class ReadCursoComponent {
  dataSource:Curso[]=[];
  columnas:string[]=[];
  acciones:string[]=[];
  title:string="Curso";

  constructor(private connectionService:ConnectionService, private router:Router){}

  ngOnInit(): void {
    this.columnas=getEntityPropiedades(this.title);
    this.acciones = ['Editar', 'Eliminar'];
    this.connectionService.getCursos().subscribe(data=>{
      this.dataSource=data;
    })
  }

  onAction(accion:Accion){
    if(accion.accion == 'Editar'){
      this.update(accion.fila);
    } else if(accion.accion=='Eliminar'){
      this.delete(accion.fila.idCurso);
    }
  } 

  update(data:any){
    this.router.navigate([this.router.url+'/update', data.idCurso]);
  }
  delete(id:string){
    Swal.fire({
      title: '¿Estas seguro que deseas eliminar?',
      showDenyButton: true,
      confirmButtonText: 'Eliminar',
      denyButtonText: `Cancelar`,
  }).then((result) => {
      if (result.isConfirmed) {
        this.connectionService.deleteCurso(id).subscribe(
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
