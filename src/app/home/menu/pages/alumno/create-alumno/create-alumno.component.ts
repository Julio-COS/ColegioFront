import { Component } from '@angular/core';
import { Alumno, AlumnoResponse } from '../../../../../interface/Alumno';
import { ConnectionService } from '../../../../../service/connection.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-alumno',
  templateUrl: './create-alumno.component.html',
  styleUrl: './create-alumno.component.css'
})
export class CreateAlumnoComponent {
  data:Alumno=new AlumnoResponse();

  constructor(
    private connectionService:ConnectionService,
    private formBuldier:FormBuilder
  ){}

  addData(){
    this.connectionService.postAlumno(this.data).subscribe();
  }
}
