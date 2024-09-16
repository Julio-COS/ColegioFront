import { Component, OnInit } from '@angular/core';
import { Matricula, MatriculaResponse } from '../../../../../interface/Matricula';
import { ConnectionService } from '../../../../../service/connection.service';
import { Router } from '@angular/router';
import { MatriculaVacancia, MatriculaVacanciaResponse } from '../../../../../interface/MatriculaVacancia';
import { Alumno, AlumnoResponse } from '../../../../../interface/Alumno';

@Component({
  selector: 'app-update-matricula',
  templateUrl: './update-matricula.component.html',
  styleUrl: './update-matricula.component.css'
})
export class UpdateMatriculaComponent implements OnInit {
  data:Matricula=new MatriculaResponse();
  dataMatricula:MatriculaVacancia=new MatriculaVacanciaResponse();
  dataEstudiante:Alumno[]=[];
  id:string='';

  constructor(private connectionService:ConnectionService, private router: Router){}
  ngOnInit(): void {
    const urlSegments =this.router.url.split('/')
    this.id=urlSegments[urlSegments.length-1];
    this.connectionService.getMatricula(this.id).subscribe(data=>{
      this.data=data;
      this.connectionService.getMatriculaVacancia(this.data.idMVacancia.toString()).subscribe(data=>{this.dataMatricula=data});
      this.connectionService.getAlumnos().subscribe(data=>{this.dataEstudiante=data});
    });
  }

  update(){
    this.connectionService.putMatricula(this.data).subscribe();
  }
}

