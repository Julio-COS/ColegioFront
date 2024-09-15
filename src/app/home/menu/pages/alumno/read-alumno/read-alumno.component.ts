import { Component } from '@angular/core';
import { Alumno } from '../../../../../interface/Alumno';
import { ConnectionService } from '../../../../../service/connection.service';
import { Accion, getEntityPropiedades } from '../../../../../interface/actionTableColumn';
import { Router } from '@angular/router';

@Component({
  selector: 'app-read-alumno',
  templateUrl: './read-alumno.component.html',
  styleUrl: './read-alumno.component.css'
})
export class ReadAlumnoComponent {
  dataSource:Alumno[]=[];
  columnas:string[]=[];
  title:string="Alumno";

  constructor(private connectionService:ConnectionService, private router:Router){}

  ngOnInit(): void {
    this.columnas=getEntityPropiedades(this.title);
    this.connectionService.getAlumnos().subscribe(data=>{
      this.dataSource=data;
    })
  }
  onAction(accion:Accion){
    if(accion.accion == 'Editar'){
      this.update(accion.fila);
    } else if(accion.accion=='Eliminar'){
      this.delete(accion.fila.idEstudiante);
    }
  } 

  update(data:any){
    this.router.navigate([this.router.url+'/update', data.idEstudiante]);
  }
  delete(id:string){
    this.connectionService.deleteAlumno(id).subscribe();
    location.reload()
  }
}
