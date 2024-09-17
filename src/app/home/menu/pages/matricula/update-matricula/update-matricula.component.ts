import { Component, OnInit } from '@angular/core';
import { Matricula, MatriculaResponse } from '../../../../../interface/Matricula';
import { ConnectionService } from '../../../../../service/connection.service';
import { Router } from '@angular/router';
import { MatriculaVacancia, MatriculaVacanciaInfo, MatriculaVacanciaInfoResponse, MatriculaVacanciaResponse } from '../../../../../interface/MatriculaVacancia';
import { Alumno, AlumnoResponse } from '../../../../../interface/Alumno';
import { Select2Data, Select2Option } from 'ng-select2-component';

@Component({
  selector: 'app-update-matricula',
  templateUrl: './update-matricula.component.html',
  styleUrl: './update-matricula.component.css'
})
export class UpdateMatriculaComponent implements OnInit {
  data:Matricula=new MatriculaResponse();
  id:string='';

  dataMatriculaV:MatriculaVacanciaInfo[]=[];
  dataEstudiante:Alumno[]=[];
  
  selectIdMatricula:string='';
  selectIdAlumno:string='';

  opciones1: Select2Data = [];
  opciones2: Select2Data = [];

  constructor(private connectionService:ConnectionService, private router: Router){}
  ngOnInit(): void {
    const urlSegments =this.router.url.split('/')
    this.id=urlSegments[urlSegments.length-1];
    this.connectionService.getMatricula(this.id).subscribe(data=>{
      this.data=data;
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
  
  updateData(){
    this.connectionService.putMatricula(this.data).subscribe();
  }
}

