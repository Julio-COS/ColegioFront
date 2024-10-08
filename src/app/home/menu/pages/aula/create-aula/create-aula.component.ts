import { Component } from '@angular/core';
import { Aula, AulaResponse } from '../../../../../interface/Aula';
import { ConnectionService } from '../../../../../service/connection.service';

@Component({
  selector: 'app-create-aula',
  templateUrl: './create-aula.component.html',
  styleUrl: './create-aula.component.css'
})
export class CreateAulaComponent {
  data:Aula=new AulaResponse();

  constructor(
    private connectionService:ConnectionService,
    private formBuldier:FormBuilder
  ){}

  addData(){
    this.connectionService.postAula(this.data).subscribe();
  }
}
