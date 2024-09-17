import { Component, OnInit } from '@angular/core';
import { Matricula, MatriculaResponse } from '../../../../../interface/Matricula';
import { ConnectionService } from '../../../../../service/connection.service';
import { Select2Data } from 'ng-select2-component';
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

  selectIdMatricula:string='';
  selectIdAlumno:string='';

  opciones1: Select2Data = [];
  opciones2: Select2Data = [];

  constructor(private connectionService:ConnectionService){}

  ngOnInit(): void {
    this.connectionService.getMatriculaVacancias().subscribe(
      data=>{
        this.dataMatriculaV=data
        this.selectIdMatricula=this.data.idMVacancia.toString();
        this.conversionDataToSelect1();
      });
    this.connectionService.getAlumnos().subscribe(
      data=>{
        this.dataEstudiante=data;
        this.selectIdAlumno=this.data.idEstudiante.toString();
        this.conversionDataToSelect2();
    });
  }

  update1(){
    this.data.idMVacancia=Number(this.selectIdMatricula)
  }
  update2(){
    this.data.idEstudiante=Number(this.selectIdAlumno)
  }
  conversionDataToSelect1(){
    this.opciones1 = this.dataMatriculaV.map(matriculaV => ({
      value: matriculaV.idMVacancia.toString(),  
      label: matriculaV.nombreAula + " Actual:" +matriculaV.disponibilidadActual + " Total:" +matriculaV.disponibilidadTotal 
    }));
  }
  conversionDataToSelect2(){
    this.opciones2 = this.dataEstudiante.map(alumno => ({
      value: alumno.idEstudiante.toString(),  
      label: alumno.nombres +" "+ alumno.apePaterno +" "+ alumno.apeMaterno
    }));
  }
  

  addData(){
    this.connectionService.postMatricula(this.data).subscribe();
  }
}
