import { Component, OnInit } from '@angular/core';
import { MatriculaVacancia, MatriculaVacanciaResponse } from '../../../../../interface/MatriculaVacancia';
import { ConnectionService } from '../../../../../service/connection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-mvacancia',
  templateUrl: './update-mvacancia.component.html',
  styleUrl: './update-mvacancia.component.css'
})
export class UpdateMVacanciaComponent implements OnInit {
  data:MatriculaVacancia=new MatriculaVacanciaResponse();
  id:string='';

  constructor(private connectionService:ConnectionService, private router: Router){}
  ngOnInit(): void {
    const urlSegments =this.router.url.split('/')
    this.id=urlSegments[urlSegments.length-1];
    this.connectionService.getMatriculaVacancia(this.id).subscribe(data=>{
      this.data=data;
    });
  }

  update(){
    this.connectionService.putMatriculaVacancia(this.data).subscribe();
  }

}
