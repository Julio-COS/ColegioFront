import { Component } from '@angular/core';
import { RelacionApoderado, RelacionApoderadoResponse } from '../../../../../interface/RelacionApoderado';
import { ConnectionService } from '../../../../../service/connection.service';

import { Apoderado } from '../../../../../interface/Apoderado';
import { Alumno } from '../../../../../interface/Alumno';
import { FormBuilder } from '@angular/forms';
import { ValidacionesService } from '../../../../../service/validaciones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-relacion-apoderado',
  templateUrl: './create-relacion-apoderado.component.html',
  styleUrl: './create-relacion-apoderado.component.css'
})
export class CreateRelacionApoderadoComponent{
  data:RelacionApoderado=new RelacionApoderadoResponse();

  dataApoderado:Apoderado[]=[];
  dataEstudiante:Alumno[]=[];

  constructor(
    private connectionService:ConnectionService,
    private formBuldier:FormBuilder,
    private validacionService:ValidacionesService,
    private router:Router
  ){
    this.connectionService.getApoderados().subscribe(
      data=>{
        this.dataApoderado=data
      });
    this.connectionService.getAlumnos().subscribe(
      data=>{
        this.dataEstudiante=data;
    });
  }
  handleAlumnoSeleccionado(idEstudiante:number){
    this.data.idEstudiante = idEstudiante;
  }

  handleApoderadoSeleccionado(idApodreado:number){
    this.data.idApoderado = idApodreado;
  }
  
  addData(){
    this.connectionService.postRelacionApoderado(this.data).subscribe();
  }

  regresar(){
    this.router.navigate([`/menu/relacion-apoderado`]);
  }
}
