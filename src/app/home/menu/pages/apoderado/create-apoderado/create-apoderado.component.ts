import { Component } from '@angular/core';
import { Apoderado, ApoderadoResponse } from '../../../../../interface/Apoderado';
import { ConnectionService } from '../../../../../service/connection.service';

@Component({
  selector: 'app-create-apoderado',
  templateUrl: './create-apoderado.component.html',
  styleUrl: './create-apoderado.component.css'
})
export class CreateApoderadoComponent {
  data:Apoderado=new ApoderadoResponse();

  constructor(
    private connectionService:ConnectionService,
    private formBuldier:FormBuilder
  ){}

  addData(){
    this.connectionService.postApoderado(this.data).subscribe();
  }
}
