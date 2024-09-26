import { Component, OnInit } from '@angular/core';
import { MatriculaVacancia, MatriculaVacanciaResponse } from '../../../../../interface/MatriculaVacancia';
import { ConnectionService } from '../../../../../service/connection.service';
import { Router } from '@angular/router';
import { Aula } from '../../../../../interface/Aula';


@Component({
  selector: 'app-update-mvacancia',
  templateUrl: './update-mvacancia.component.html',
  styleUrl: './update-mvacancia.component.css'
})
export class UpdateMVacanciaComponent implements OnInit {
  data:MatriculaVacancia=new MatriculaVacanciaResponse();
  id:string='';

  dataAula:Aula[]=[];

  constructor(private connectionService:ConnectionService, private router: Router){}
  ngOnInit(): void {
    const urlSegments =this.router.url.split('/')
    this.id=urlSegments[urlSegments.length-1];
    this.connectionService.getMatriculaVacancia(this.id).subscribe(data=>{
      this.data=data;
      this.connectionService.getAulas().subscribe(
        data=>{
          this.dataAula=data
        });
    });
  }

  handleAulaSeleccionado(idAula:number){
    this.data.idAula = idAula;
  }

  updateData(){
    this.connectionService.putMatriculaVacancia(this.data).subscribe();
  }

}
