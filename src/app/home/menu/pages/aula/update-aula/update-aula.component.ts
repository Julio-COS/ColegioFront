import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../../../../../service/connection.service';
import { Router } from '@angular/router';
import { Aula, AulaResponse } from '../../../../../interface/Aula';
import { ValidacionesService } from '../../../../../service/validaciones.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-aula',
  templateUrl: './update-aula.component.html',
  styleUrl: './update-aula.component.css'
})
export class UpdateAulaComponent implements OnInit{
  data:Aula=new AulaResponse();
  form!: FormGroup;
  id:string='';

  constructor(
    private connectionService:ConnectionService,
    private router: Router
  ){}
  ngOnInit(): void {
    const urlSegments =this.router.url.split('/')
    this.id=urlSegments[urlSegments.length-1];

    this.form = new FormBuilder().group({
      nivel: ['', [Validators.required]],
      seccion: ['', [Validators.required]],
      gradoActual: ['', [Validators.required]]
    })

    this.connectionService.getAula(this.id).subscribe(data=>{
      this.data=data;
      this.obtenerDatos();
    });
  }
  
  obtenerDatos(){
    this.form.patchValue({
      nivel: this.data.nivel,
      seccion: this.data.seccion,
      gradoActual: this.data.gradoActual
    });
  }

  updateData(){
    if (this.form.valid) {

      this.data={
        idAula:Number(this.id),
        nivel: this.form.get('nivel')?.value,
        seccion: this.form.get('seccion')?.value,
        gradoActual: this.form.get('gradoActual')?.value,
     }

      this.connectionService.putAula(this.data).subscribe(
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
    this.router.navigate([`/menu/aula`]);
  }
}
