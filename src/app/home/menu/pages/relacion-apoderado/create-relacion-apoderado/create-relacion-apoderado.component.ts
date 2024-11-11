import { Component, OnInit } from '@angular/core';
import { RelacionApoderado, RelacionApoderadoResponse } from '../../../../../interface/RelacionApoderado';
import { ConnectionService } from '../../../../../service/connection.service';

import { Apoderado } from '../../../../../interface/Apoderado';
import { Alumno } from '../../../../../interface/Alumno';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidacionesService } from '../../../../../service/validaciones.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-relacion-apoderado',
  templateUrl: './create-relacion-apoderado.component.html',
  styleUrl: './create-relacion-apoderado.component.css'
})
export class CreateRelacionApoderadoComponent implements OnInit{
  data:RelacionApoderado=new RelacionApoderadoResponse();
  form!: FormGroup;

  dataApoderado:Apoderado[]=[];
  dataEstudiante:Alumno[]=[];

  constructor(
    private connectionService:ConnectionService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.form = new FormBuilder().group({
      idEstudiante: ['', [Validators.required]],
      idApoderado: ['', [Validators.required]],
      tipoRelacion: ['', [Validators.required]],
    })

    this.connectionService.getApoderados().subscribe(
      data=>{
        this.dataApoderado=data
      });
    this.connectionService.getAlumnos().subscribe(
      data=>{
        this.dataEstudiante=data;
    });
  }
  handleAlumnoSeleccionado(idEstudiante:number){
    this.data.idEstudiante = idEstudiante;
  }

  handleApoderadoSeleccionado(idApodreado:number){
    this.data.idApoderado = idApodreado;
  }
  
  addData(){
    if (this.form.valid) {

      this.data={
        idEstudiante: this.form.get('idEstudiante')?.value,
        idApoderado: this.form.get('idApoderado')?.value,
        tipoRelacion: this.form.get('tipoRelacion')?.value,
      }

      this.connectionService.postRelacionApoderado(this.data).subscribe(
        (response) => {
          if (response.isSuccess) {
            Swal.fire({
              title: 'Registrando...',
              allowOutsideClick: false,
            })
            Swal.showLoading();
            Swal.close();
            Swal.fire('Correcto', 'Registrado en el sistema correctamente.', 'success');
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
    this.router.navigate([`/menu/relacion-apoderado`]);
  }
}
