import { Component, OnInit } from '@angular/core';
import { Alumno, AlumnoResponse } from '../../../../../interface/Alumno';
import { ConnectionService } from '../../../../../service/connection.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidacionesService } from '../../../../../service/validaciones.service';
import { format } from 'date-fns';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-alumno',
  templateUrl: './create-alumno.component.html',
  styleUrl: './create-alumno.component.css'
})
export class CreateAlumnoComponent implements OnInit{
  data:Alumno=new AlumnoResponse();
  form!: FormGroup;

  constructor(
    private connectionService:ConnectionService,
    private formBuldier:FormBuilder,
    private validacionService:ValidacionesService,
    private router:Router
  ){}

  ngOnInit(): void {
    this.form = this.formBuldier.group({
      nombres: ['', [Validators.required]],
      apePaterno: ['', [Validators.required]],
      apeMaterno: ['', [Validators.required]],
      dni: ['', [Validators.required, Validators.pattern(/^[0-9]{8}$/)]],
      genero: ['', [Validators.required]],
      telefono: ['', [Validators.required, Validators.pattern(/^[0-9]{9}$/)]],
      fechaRegistro: [{ value: format(new Date(),'yyyy-MM-dd'), disabled: true }],
      fechaNacimiento: ['', [Validators.required]],
      direccion: ['', [Validators.required]]
    });
  }

  addData(): void {
    if (this.form.valid) {

       this.data={
        nombres: this.form.get('nombres')?.value,
        apePaterno: this.form.get('apePaterno')?.value,
        apeMaterno: this.form.get('apeMaterno')?.value,
        dni: this.form.get('dni')?.value,
        genero: this.form.get('genero')?.value,
        telefono: this.form.get('telefono')?.value,
        fechaRegistro: this.form.get('fechaRegistro')?.value,
        fechaNacimiento: this.form.get('fechaNacimiento')?.value,
        direccion: this.form.get('direccion')?.value,
      }

      this.connectionService.postAlumno(this.data).subscribe(
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
          } else {
            console.error(response.message);
          }
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      this.validacionService.markAllFieldsAsTouched(this.form);
    }
  }

  isInvalid(controlName: string): boolean | undefined {
    return this.validacionService.isInvalid(this.form, controlName);
  }

  isRequerido(controlName: string): boolean {
    return this.validacionService.isRequerido(this.form, controlName);
  }

  regresar(){
    this.router.navigate([`/menu/alumno`]);
  }
}
