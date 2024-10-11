import { Component, OnInit } from '@angular/core';
import { Horario, HorarioResponse } from '../../../../../interface/Horario';
import { ConnectionService } from '../../../../../service/connection.service';
import { Aula } from '../../../../../interface/Aula';
import { Docente } from '../../../../../interface/Docente';
import { Curso } from '../../../../../interface/Curso';
import { FormBuilder } from '@angular/forms';
import { ValidacionesService } from '../../../../../service/validaciones.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-horario',
  templateUrl: './create-horario.component.html',
  styleUrl: './create-horario.component.css'
})
export class CreateHorarioComponent implements OnInit{
  data:Horario=new HorarioResponse();

  dataAula:Aula[]=[];
  dataDocente:Docente[]=[];
  dataCurso:Curso[]=[];
    
  constructor(
    private connectionService:ConnectionService,
    private formBuldier:FormBuilder,
    private validacionService:ValidacionesService,
    private router:Router
  ){}
  
  ngOnInit(): void {
    this.connectionService.getAulas().subscribe(
      data=>{
        this.dataAula=data
      });
    this.connectionService.getDocentes().subscribe(
      data=>{
        this.dataDocente=data
      });
    this.connectionService.getCursos().subscribe(
      data=>{
        this.dataCurso=data;
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


  addData(){
    this.connectionService.postHorario(this.data).subscribe();
    this.data=new HorarioResponse();
  }

  regresar(){
    this.router.navigate([`/menu/horario`]);
  }
}
