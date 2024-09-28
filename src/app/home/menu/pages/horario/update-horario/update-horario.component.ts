import { Component, OnInit } from '@angular/core';
import { Horario, HorarioResponse } from '../../../../../interface/Horario';
import { ConnectionService } from '../../../../../service/connection.service';
import { Router } from '@angular/router';
import { Aula } from '../../../../../interface/Aula';

import { Docente } from '../../../../../interface/Docente';
import { Curso } from '../../../../../interface/Curso';

@Component({
  selector: 'app-update-horario',
  templateUrl: './update-horario.component.html',
  styleUrl: './update-horario.component.css'
})
export class UpdateHorarioComponent implements OnInit{
  data:Horario=new HorarioResponse();
  id:string='';

  dataAula:Aula[]=[];
  dataDocente:Docente[]=[];
  dataCurso:Curso[]=[];
  
  constructor(private connectionService:ConnectionService, private router: Router){}
  ngOnInit(): void {
    const urlSegments =this.router.url.split('/')
    this.id=urlSegments[urlSegments.length-1];
    this.connectionService.getHorario(this.id).subscribe(data=>{
      this.data=data;
      this.connectionService.getAulas().subscribe(
        data=>{
          this.dataAula=data
          this.handleAulaSeleccionado(this.data.idAula);
        });
      this.connectionService.getDocentes().subscribe(
        data=>{
          this.dataDocente=data
          this.handleDocenteSeleccionado(this.data.idDocente);
        });
      this.connectionService.getCursos().subscribe(
        data=>{
          this.dataCurso=data;
          this.handleCursoSeleccionado(this.data.idCurso);
      });
    });
  }

  handleDocenteSeleccionado(idDocente:number){
    this.data.idDocente = idDocente;
  }
  handleCursoSeleccionado(idCurso:number){
    this.data.idCurso = idCurso;
  }
  handleAulaSeleccionado(idAula:number){
    this.data.idAula = idAula;
  }

  updateData(){
    this.connectionService.putHorario(this.data).subscribe();
  }
}
