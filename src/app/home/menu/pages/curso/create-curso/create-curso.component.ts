import { Component, OnInit } from '@angular/core';
import { Curso, CursoResponse } from '../../../../../interface/Curso';
import { ConnectionService } from '../../../../../service/connection.service';
import { ValidacionesService } from '../../../../../service/validaciones.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-curso',
  templateUrl: './create-curso.component.html',
  styleUrl: './create-curso.component.css'
})
export class CreateCursoComponent implements OnInit {
  data:Curso=new CursoResponse();
  form!: FormGroup;

  constructor(
    private connectionService:ConnectionService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.form = new FormBuilder().group({
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]]
    });
  }

  addData(){
    if (this.form.valid) {
      this.data={
        nombre: this.form.get('nombre')?.value,
        descripcion: this.form.get('descripcion')?.value,
      }
    this.connectionService.postCurso(this.data).subscribe(
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
    this.router.navigate([`/menu/curso`]);
  }

}
