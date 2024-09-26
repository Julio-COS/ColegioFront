import { Component, OnInit } from '@angular/core';
import { MatriculaVacancia, MatriculaVacanciaResponse } from '../../../../../interface/MatriculaVacancia';
import { ConnectionService } from '../../../../../service/connection.service';

import { Aula } from '../../../../../interface/Aula';

@Component({
  selector: 'app-create-mvacancia',
  templateUrl: './create-mvacancia.component.html',
  styleUrl: './create-mvacancia.component.css'
})
export class CreateMVacanciaComponent implements OnInit{
  data:MatriculaVacancia=new MatriculaVacanciaResponse();
  dataAula:Aula[]=[];

  constructor(private connectionService:ConnectionService){}

  ngOnInit(): void {
    this.connectionService.getAulas().subscribe(
      data=>{
        this.dataAula=data
      });
  }

  handleAulaSeleccionado(idAula:number){
    this.data.idAula = idAula;
  }

  addData(){
    this.connectionService.postMatriculaVacancia(this.data).subscribe();
  }
}
