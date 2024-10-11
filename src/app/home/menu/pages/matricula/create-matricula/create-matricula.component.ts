import { Component, OnInit } from '@angular/core';
import { Matricula, MatriculaResponse } from '../../../../../interface/Matricula';
import { ConnectionService } from '../../../../../service/connection.service';

import { MatriculaVacanciaInfo } from '../../../../../interface/MatriculaVacancia';
import { Alumno } from '../../../../../interface/Alumno';
import { FormBuilder } from '@angular/forms';
import { ValidacionesService } from '../../../../../service/validaciones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-matricula',
  templateUrl: './create-matricula.component.html',
  styleUrl: './create-matricula.component.css'
})
export class CreateMatriculaComponent implements OnInit{
  data:Matricula=new MatriculaResponse();
  dataMatriculaV:MatriculaVacanciaInfo[]=[];
  dataEstudiante:Alumno[]=[];

  constructor(
    private connectionService:ConnectionService,
    private formBuldier:FormBuilder,
    private validacionService:ValidacionesService,
    private router:Router
  ){}

  ngOnInit(): void {
    this.connectionService.getMatriculaVacancias().subscribe(
      data=>{
        this.dataMatriculaV=data
      });
    this.connectionService.getAlumnos().subscribe(
      data=>{
        this.dataEstudiante=data;
    });
  }
  handleMVSeleccionado(idMVacancia:number){
    this.data.idMVacancia = idMVacancia;
  }
  handleEstudianteSeleccionado(idEstudiante:number){
    this.data.idEstudiante = idEstudiante;
  }
  

  addData(){
    this.connectionService.postMatricula(this.data).subscribe();
  }

  regresar(){
    this.router.navigate([`/menu/matricula`]);
  }
}
