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

  constructor(private connectionService:ConnectionService, private router: Router){}
  ngOnInit(): void {
    const urlSegments =this.router.url.split('/')
    this.id=urlSegments[urlSegments.length-1];
    this.connectionService.getMatricula(this.id).subscribe(data=>{
      this.data=data;
      this.connectionService.getMatriculaVacancias().subscribe(
        data=>{
          this.dataMatriculaV=data;
          this.handleMVSeleccionado(this.data.idMVacancia);
        });
      this.connectionService.getAlumnos().subscribe(
        data=>{
          this.dataEstudiante=data;
          this.handleEstudianteSeleccionado(this.data.idEstudiante);
      });
    });
  }


  handleMVSeleccionado(idMVacancia:number){
    this.data.idMVacancia = idMVacancia;
  }
  handleEstudianteSeleccionado(idEstudiante:number){
    this.data.idEstudiante = idEstudiante;
  }
  
  updateData(){
    this.connectionService.putMatricula(this.data).subscribe();
  }
}

