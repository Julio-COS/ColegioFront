import { Component } from '@angular/core';
import { Curso, CursoResponse } from '../../../../../interface/Curso';
import { ConnectionService } from '../../../../../service/connection.service';

@Component({
  selector: 'app-create-curso',
  templateUrl: './create-curso.component.html',
  styleUrl: './create-curso.component.css'
})
export class CreateCursoComponent {
  data:Curso=new CursoResponse();

  constructor(private connectionService:ConnectionService){}

  addData(){
    this.connectionService.postCurso(this.data).subscribe();
  }


}
