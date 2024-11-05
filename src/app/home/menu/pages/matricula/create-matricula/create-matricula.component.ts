import { Component, OnInit } from '@angular/core';
import { Matricula, MatriculaResponse } from '../../../../../interface/Matricula';
import { ConnectionService } from '../../../../../service/connection.service';

import { MatriculaVacanciaInfo } from '../../../../../interface/MatriculaVacancia';
import { Alumno } from '../../../../../interface/Alumno';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidacionesService } from '../../../../../service/validaciones.service';
import { Router } from '@angular/router';
import { format } from 'date-fns';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-matricula',
  templateUrl: './create-matricula.component.html',
  styleUrl: './create-matricula.component.css'
})
export class CreateMatriculaComponent implements OnInit{
  data:Matricula=new MatriculaResponse();
  form!: FormGroup;
  dataMatriculaV:MatriculaVacanciaInfo[]=[];
  dataEstudiante:Alumno[]=[];

  constructor(
    private connectionService:ConnectionService,
    private router:Router
  ){}

  ngOnInit(): void {

    this.form = new FormBuilder().group({
      idMVacancia: ['', [Validators.required]],
      idEstudiante: ['', [Validators.required]],
      fechaRegistro: [{ value: format(new Date(),'yyyy-MM-dd'), disabled: true }],
      estado: ['', [Validators.required]],
    });

    this.connectionService.getMatriculaVacancias().subscribe(
      data=>{
        this.dataMatriculaV=data
      });
    this.connectionService.getAlumnos().subscribe(
      data=>{
        this.dataEstudiante=data;
    });
  }
  handleMVSeleccionado(idMVacancia:number){
    this.data.idMVacancia = idMVacancia;
  }
  handleEstudianteSeleccionado(idEstudiante:number){
    this.data.idEstudiante = idEstudiante;
  }

  addData(){
    if (this.form.valid) {

      this.data={
        idMVacancia: this.form.get('idMVacancia')?.value,
        idEstudiante: this.form.get('idEstudiante')?.value,
        fechaRegistro: this.form.get('fechaRegistro')?.value,
        estado: this.form.get('estado')?.value,
      }
      
      this.connectionService.postMatricula(this.data).subscribe(
        (response) => {
          if (response.isSuccess) {
            Swal.fire({
              title: 'Registrando...',
              allowOutsideClick: false,
            })
            Swal.showLoading();
            Swal.close();
            Swal.fire('Correcto', 'Alumno registrado en el sistema correctamente.', 'success');
            this.regresar();
          } else {console.error(response.message);}
        },
        (error) => {console.error(error);}
      );
    } else {
      new ValidacionesService().markAllFieldsAsTouched(this.form);
    }
  }

  isInvalid(controlName: string): boolean | undefined {
    return new ValidacionesService().isInvalid(this.form, controlName);
  }

  isRequerido(controlName: string): boolean {
    return new ValidacionesService().isRequerido(this.form, controlName);
  }

  regresar(){
    this.router.navigate([`/menu/matricula`]);
  }
}
