import { Component } from '@angular/core';
import { Matricula, MatriculaResponse } from '../../../../../interface/Matricula';
import { ConnectionService } from '../../../../../service/connection.service';

@Component({
  selector: 'app-create-matricula',
  templateUrl: './create-matricula.component.html',
  styleUrl: './create-matricula.component.css'
})
export class CreateMatriculaComponent {
  data:Matricula=new MatriculaResponse();

  constructor(private connectionService:ConnectionService){}

  addData(){
    this.connectionService.postMatricula(this.data).subscribe();
  }
}
