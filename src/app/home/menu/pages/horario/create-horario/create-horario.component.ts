import { Component, OnInit } from '@angular/core';
import { Horario, HorarioResponse } from '../../../../../interface/Horario';
import { ConnectionService } from '../../../../../service/connection.service';
import { Aula } from '../../../../../interface/Aula';
import { Docente } from '../../../../../interface/Docente';
import { Curso } from '../../../../../interface/Curso';
import { Select2Data } from 'ng-select2-component';

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
  
  selectIdAula:string='';
  selectIdDocente:string='';
  selectIdCurso:string='';

  opciones1: Select2Data = [];
  opciones2: Select2Data = [];
  opciones3: Select2Data = [];
  
  constructor(private connectionService:ConnectionService){}
  
  ngOnInit(): void {
    this.connectionService.getAulas().subscribe(
      data=>{
        this.dataAula=data
        this.selectIdAula=this.data.idAula.toString();
        this.conversionDataToSelect1();
      });
    this.connectionService.getDocentes().subscribe(
      data=>{
        this.dataDocente=data
        this.selectIdDocente=this.data.idDocente.toString();
        this.conversionDataToSelect2();
      });
    this.connectionService.getCursos().subscribe(
      data=>{
        this.dataCurso=data;
        this.selectIdCurso=this.data.idCurso.toString();
        this.conversionDataToSelect3();
    });
  }
  update1(){
    this.data.idAula=Number(this.selectIdAula)
  }
  update2(){
    this.data.idDocente=Number(this.selectIdDocente)
  }
  update3(){
    this.data.idCurso=Number(this.selectIdCurso)
  }

  conversionDataToSelect1(){
    this.opciones1 = this.dataAula.map(data => ({
      value: data.idAula.toString(),  
      label: data.gradoActual + " - " +data.seccion + " - " +data.nivel 
    }));
  }
  conversionDataToSelect2(){
    this.opciones2 = this.dataDocente.map(data => ({
      value: data.idDocente.toString(),  
      label: data.nombre +" "+ data.apellidoPaterno +" "+ data.apellidoMaterno
    }));
  }
  conversionDataToSelect3(){
    this.opciones3 = this.dataCurso.map(data => ({
      value: data.idCurso.toString(),  
      label: data.nombre + " | " +data.descripcion
    }));
  }

  addData(){
    this.connectionService.postHorario(this.data).subscribe();
    this.data=new HorarioResponse();
  }
}
