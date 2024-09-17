import { Component, OnInit } from '@angular/core';
import { MatriculaVacancia, MatriculaVacanciaResponse } from '../../../../../interface/MatriculaVacancia';
import { ConnectionService } from '../../../../../service/connection.service';
import { Select2Data } from 'ng-select2-component';
import { Aula } from '../../../../../interface/Aula';

@Component({
  selector: 'app-create-mvacancia',
  templateUrl: './create-mvacancia.component.html',
  styleUrl: './create-mvacancia.component.css'
})
export class CreateMVacanciaComponent implements OnInit{
  data:MatriculaVacancia=new MatriculaVacanciaResponse();
  dataAula:Aula[]=[];

  selectIdAula:string='';
  opciones1: Select2Data = [];
  constructor(private connectionService:ConnectionService){}

  ngOnInit(): void {
    this.connectionService.getAulas().subscribe(
      data=>{
        this.dataAula=data
        this.selectIdAula=this.data.idAula.toString();
        this.conversionDataToSelect1();
      });
  }
  update1(){
    this.data.idAula=Number(this.selectIdAula)
  }
  conversionDataToSelect1(){
    this.opciones1 = this.dataAula.map(data => ({
      value: data.idAula.toString(),  
      label: data.gradoActual + " - " +data.seccion + " - " +data.nivel 
    }));
  }

  addData(){
    this.connectionService.postMatriculaVacancia(this.data).subscribe();
  }
}
