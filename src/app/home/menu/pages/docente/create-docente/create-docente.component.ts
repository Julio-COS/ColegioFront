import { Component } from '@angular/core';
import { Docente, DocenteResponse } from '../../../../../interface/Docente';
import { ConnectionService } from '../../../../../service/connection.service';
import { Router } from '@angular/router';
import { ValidacionesService } from '../../../../../service/validaciones.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { format } from 'date-fns';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-docente',
  templateUrl: './create-docente.component.html',
  styleUrl: './create-docente.component.css'
})
export class CreateDocenteComponent {
  data:Docente=new DocenteResponse();
  form!: FormGroup;

  constructor(
    private connectionService:ConnectionService,
    private router:Router
  ){}

  ngOnInit(): void {
    this.form = new FormBuilder().group({
      nombre: ['', [Validators.required]],
      apellidoPaterno: ['', [Validators.required]],
      apellidoMaterno: ['', [Validators.required]],
      ciudad: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      tipoCargo: ['', [Validators.required]],
      dni: ['', [Validators.required, Validators.pattern(/^[0-9]{8}$/)]],
      fechaRegistro: [{ value: format(new Date(),'yyyy-MM-dd'), disabled: true }],
    });
  }

  addData(): void{
    if (this.form.valid) {

      this.data={
        nombre: this.form.get('nombre')?.value,
        apellidoPaterno: this.form.get('apellidoPaterno')?.value,
        apellidoMaterno: this.form.get('apellidoMaterno')?.value,
        ciudad: this.form.get('ciudad')?.value,
        direccion: this.form.get('direccion')?.value,
        tipoCargo: this.form.get('tipoCargo')?.value,
        dni: this.form.get('dni')?.value,
        fechaRegistro: this.form.get('fechaRegistro')?.value,
      }
        
      this.connectionService.postDocente(this.data).subscribe(
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
    this.router.navigate([`/menu/docente`]);
  }
}
