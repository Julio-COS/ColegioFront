import { Component } from '@angular/core';
import { Docente, DocenteResponse } from '../../../../../interface/Docente';
import { ConnectionService } from '../../../../../service/connection.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { format } from 'date-fns';
import { ValidacionesService } from '../../../../../service/validaciones.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-docente',
  templateUrl: './update-docente.component.html',
  styleUrl: './update-docente.component.css'
})
export class UpdateDocenteComponent {
  data:Docente=new DocenteResponse();
  form!: FormGroup;
  id:string='';

  constructor(private connectionService:ConnectionService, private router: Router){}
  
  ngOnInit(): void {
    const urlSegments =this.router.url.split('/')
    this.id=urlSegments[urlSegments.length-1];

    this.form = new FormBuilder().group({
      nombre: ['', [Validators.required]],
      apellidoPaterno: ['', [Validators.required]],
      apellidoMaterno: ['', [Validators.required]],
      ciudad: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      tipoCargo: ['', [Validators.required]],
      dni: ['', [Validators.required, Validators.pattern(/^[0-9]{8}$/)]],
      fechaRegistro: [{ value: '', disabled: true }],
    });

    this.connectionService.getDocente(this.id).subscribe(data=>{
      this.data=data;
      this.obtenerDatos();
    });
  }

  obtenerDatos(): void{
    this.form.patchValue({
      nombre: this.data.nombre,
      apellidoPaterno: this.data.apellidoPaterno,
      apellidoMaterno: this.data.apellidoMaterno,
      ciudad: this.data.ciudad,
      direccion: this.data.direccion,
      tipoCargo: this.data.tipoCargo,
      dni: this.data.dni,
      fechaRegistro: format(this.data.fechaRegistro,'yyyy-MM-dd')
    });
  }

  updateData(){
    if (this.form.valid) {

      this.data={
       idDocente:Number(this.id),
        nombre: this.form.get('nombre')?.value,
        apellidoPaterno: this.form.get('apellidoPaterno')?.value,
        apellidoMaterno: this.form.get('apellidoMaterno')?.value,
        ciudad: this.form.get('ciudad')?.value,
        direccion: this.form.get('direccion')?.value,
        tipoCargo: this.form.get('tipoCargo')?.value,
        dni: this.form.get('dni')?.value,
        fechaRegistro: this.form.get('fechaRegistro')?.value,
     }

      this.connectionService.putDocente(this.data).subscribe(
        (response) => {
          if (response.isSuccess) {
            Swal.fire({
              title: 'Registrando...',
              allowOutsideClick: false,
            })
            Swal.showLoading();
            Swal.close();
            Swal.fire('Correcto', 'Actualizado en el sistema correctamente.', 'success');
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
