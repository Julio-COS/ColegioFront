import { Component } from '@angular/core';
import { Docente, DocenteResponse } from '../../../../../interface/Docente';
import { ConnectionService } from '../../../../../service/connection.service';
import { Router } from '@angular/router';
import { Accion } from '../../../../../interface/actionTableColumn';

@Component({
  selector: 'app-create-docente',
  templateUrl: './create-docente.component.html',
  styleUrl: './create-docente.component.css'
})
export class CreateDocenteComponent {
  data:Docente=new DocenteResponse();

  constructor(
    private connectionService:ConnectionService,
    private formBuldier:FormBuilder
  ){}

  addData(){
    this.connectionService.postDocente(this.data).subscribe();
  }

}
