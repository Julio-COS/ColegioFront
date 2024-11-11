import { Component, OnInit } from '@angular/core';
import { Apoderado, ApoderadoResponse } from '../../../../../interface/Apoderado';
import { ConnectionService } from '../../../../../service/connection.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidacionesService } from '../../../../../service/validaciones.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-apoderado',
  templateUrl: './create-apoderado.component.html',
  styleUrl: './create-apoderado.component.css'
})
export class CreateApoderadoComponent implements OnInit{
  data:Apoderado=new ApoderadoResponse();
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
      apellidoP: ['', [Validators.required]],
      apellidoM: ['', [Validators.required]],
      dni: ['', [Validators.required, Validators.pattern(/^[0-9]{8}$/)]],
      telefono: ['', [Validators.required, Validators.pattern(/^[0-9]{9}$/)]],
      direccion:['', [Validators.required]]
    })
  }

  addData(): void {
    if (this.form.valid) {

       this.data={
        nombres: this.form.get('nombres')?.value,
        apellidoP: this.form.get('apellidoP')?.value,
        apellidoM: this.form.get('apellidoM')?.value,
        dni: this.form.get('dni')?.value,
        telefono: this.form.get('telefono')?.value,
        direccion: this.form.get('direccion')?.value,
      }

      this.connectionService.postApoderado(this.data).subscribe(
        (response) => {
          console.log(response)
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
    this.router.navigate([`/menu/apoderado`]);
  }
}
