import { Component, OnInit } from '@angular/core';
import { Matricula, MatriculaResponse } from '../../../../../interface/Matricula';
import { ConnectionService } from '../../../../../service/connection.service';

import { MatriculaVacanciaInfo } from '../../../../../interface/MatriculaVacancia';
import { Alumno } from '../../../../../interface/Alumno';

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
    private formBuldier:FormBuilder
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
}
