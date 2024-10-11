import { Component } from '@angular/core';
import { Docente, DocenteResponse } from '../../../../../interface/Docente';
import { ConnectionService } from '../../../../../service/connection.service';
import { Router } from '@angular/router';
import { Accion } from '../../../../../interface/actionTableColumn';
import { ValidacionesService } from '../../../../../service/validaciones.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-docente',
  templateUrl: './create-docente.component.html',
  styleUrl: './create-docente.component.css'
})
export class CreateDocenteComponent {
  data:Docente=new DocenteResponse();

  constructor(
    private connectionService:ConnectionService,
    private formBuldier:FormBuilder,
    private validacionService:ValidacionesService,
    private router:Router
  ){}

  addData(){
    this.connectionService.postDocente(this.data).subscribe();
  }

  regresar(){
    this.router.navigate([`/menu/docente`]);
  }
}
