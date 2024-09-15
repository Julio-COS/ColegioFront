import { Component } from '@angular/core';
import { Alumno } from '../../../../../interface/Alumno';
import { ConnectionService } from '../../../../../service/connection.service';
import { getEntityPropiedades } from '../../../../../interface/actionTableColumn';

@Component({
  selector: 'app-read-alumno',
  templateUrl: './read-alumno.component.html',
  styleUrl: './read-alumno.component.css'
})
export class ReadAlumnoComponent {
  dataSource:Alumno[]=[];
  columnas:string[]=[];
  title:string="Alumno";

  constructor(private connectionService:ConnectionService){}

  ngOnInit(): void {
    this.columnas=getEntityPropiedades(this.title);
    this.connectionService.getAlumnos().subscribe(data=>{
      this.dataSource=data;
    })
  }
}
