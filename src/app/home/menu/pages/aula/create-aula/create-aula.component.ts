import { Component } from '@angular/core';
import { Aula, AulaResponse } from '../../../../../interface/Aula';
import { ConnectionService } from '../../../../../service/connection.service';
import { ValidacionesService } from '../../../../../service/validaciones.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-aula',
  templateUrl: './create-aula.component.html',
  styleUrl: './create-aula.component.css'
})
export class CreateAulaComponent {
  data:Aula=new AulaResponse();

  constructor(
    private connectionService:ConnectionService,
    private formBuldier:FormBuilder,
    private validacionService:ValidacionesService
  ){}

  addData(){
    this.connectionService.postAula(this.data).subscribe();
  }
}
