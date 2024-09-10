import { Component } from '@angular/core';
import { MatriculaVacancia, MatriculaVacanciaResponse } from '../../../../../interface/MatriculaVacancia';
import { ConnectionService } from '../../../../../service/connection.service';

@Component({
  selector: 'app-create-mvacancia',
  templateUrl: './create-mvacancia.component.html',
  styleUrl: './create-mvacancia.component.css'
})
export class CreateMVacanciaComponent {
  data:MatriculaVacancia=new MatriculaVacanciaResponse();

  constructor(private connectionService:ConnectionService){}

  addData(){
    this.connectionService.postMatriculaVacancia(this.data).subscribe();
  }
}
