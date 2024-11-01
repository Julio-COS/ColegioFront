import { Component, OnInit } from '@angular/core';
import { Aula, AulaResponse } from '../../../../../interface/Aula';
import { ConnectionService } from '../../../../../service/connection.service';
import { ValidacionesService } from '../../../../../service/validaciones.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-aula',
  templateUrl: './create-aula.component.html',
  styleUrl: './create-aula.component.css'
})
export class CreateAulaComponent implements OnInit{
  data:Aula=new AulaResponse();
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


  addData(){
    if (this.form.valid) {

      this.data={
        nivel:this.form.get('nombres')?.value,
        seccion:this.form.get('nombres')?.value,
        gradoActual:this.form.get('nombres')?.value,
     }

    this.connectionService.postAula(this.data).subscribe(
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
      });
    } else this.validacionService.markAllFieldsAsTouched(this.form);

  }
  
  isInvalid(controlName: string): boolean | undefined {
    return this.validacionService.isInvalid(this.form, controlName);
  }

  isRequerido(controlName: string): boolean {
    return this.validacionService.isRequerido(this.form, controlName);
  }

  regresar(){
    this.router.navigate([`/menu/aula`]);
  }
}
