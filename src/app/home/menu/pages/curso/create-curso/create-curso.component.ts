import { Component } from '@angular/core';
import { Curso, CursoResponse } from '../../../../../interface/Curso';
import { ConnectionService } from '../../../../../service/connection.service';
import { ValidacionesService } from '../../../../../service/validaciones.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-curso',
  templateUrl: './create-curso.component.html',
  styleUrl: './create-curso.component.css'
})
export class CreateCursoComponent {
  data:Curso=new CursoResponse();

  constructor(
    private connectionService:ConnectionService,
    private formBuldier:FormBuilder,
    private validacionService:ValidacionesService,
    private router:Router
  ){}

  addData(){
    this.connectionService.postCurso(this.data).subscribe();
  }
  regresar(){
    this.router.navigate([`/menu/`]);
  }

}
