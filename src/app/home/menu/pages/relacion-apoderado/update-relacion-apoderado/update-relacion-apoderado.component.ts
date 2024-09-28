import { Component } from '@angular/core';
import { RelacionApoderado, RelacionApoderadoResponse } from '../../../../../interface/RelacionApoderado';
import { Router } from '@angular/router';
import { ConnectionService } from '../../../../../service/connection.service';

import { Alumno } from '../../../../../interface/Alumno';
import { Apoderado } from '../../../../../interface/Apoderado';

@Component({
  selector: 'app-update-relacion-apoderado',
  templateUrl: './update-relacion-apoderado.component.html',
  styleUrl: './update-relacion-apoderado.component.css'
})
export class UpdateRelacionApoderadoComponent {
  data:RelacionApoderado=new RelacionApoderadoResponse();
  id:string='';

  dataApoderado:Apoderado[]=[];
  dataEstudiante:Alumno[]=[];
  
  constructor(
    private connectionService:ConnectionService,
    private router: Router){}

  ngOnInit(): void {
    const urlSegments =this.router.url.split('/')
    this.id=urlSegments[urlSegments.length-1];
    this.connectionService.getRelacionApoderado(this.id).subscribe(data=>{
      this.data=data;
      this.connectionService.getApoderados().subscribe(
        data=>{
          this.dataApoderado=data;
          this.handleApoderadoSeleccionado(this.data.idApoderado);
        });
      this.connectionService.getAlumnos().subscribe(
        data=>{
          this.dataEstudiante=data;
          this.handleAlumnoSeleccionado(this.data.idEstudiante);
      });
    });
  }

  handleAlumnoSeleccionado(idEstudiante:number){
    this.data.idEstudiante = idEstudiante;
  }

  handleApoderadoSeleccionado(idApodreado:number){
    this.data.idApoderado = idApodreado;
  }
  

  updateData(){
    this.connectionService.putRelacionApoderado(this.data).subscribe();
  }
}
