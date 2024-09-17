import { Component, OnInit } from '@angular/core';
import { MatriculaVacancia, MatriculaVacanciaResponse } from '../../../../../interface/MatriculaVacancia';
import { ConnectionService } from '../../../../../service/connection.service';
import { Router } from '@angular/router';
import { Aula } from '../../../../../interface/Aula';
import { Select2Data } from 'ng-select2-component';

@Component({
  selector: 'app-update-mvacancia',
  templateUrl: './update-mvacancia.component.html',
  styleUrl: './update-mvacancia.component.css'
})
export class UpdateMVacanciaComponent implements OnInit {
  data:MatriculaVacancia=new MatriculaVacanciaResponse();
  id:string='';

  dataAula:Aula[]=[];
  
  selectIdAula:string='';
  opciones1: Select2Data = [];

  constructor(private connectionService:ConnectionService, private router: Router){}
  ngOnInit(): void {
    const urlSegments =this.router.url.split('/')
    this.id=urlSegments[urlSegments.length-1];
    this.connectionService.getMatriculaVacancia(this.id).subscribe(data=>{
      this.data=data;
      this.connectionService.getAulas().subscribe(
        data=>{
          this.dataAula=data
          this.selectIdAula=this.data.idAula.toString();
          this.conversionDataToSelect1();
        });
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

  updateData(){
    this.connectionService.putMatriculaVacancia(this.data).subscribe();
  }

}
