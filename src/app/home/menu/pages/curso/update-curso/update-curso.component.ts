import { Component, OnInit } from '@angular/core';
import { Curso, CursoResponse } from '../../../../../interface/Curso';
import { ConnectionService } from '../../../../../service/connection.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidacionesService } from '../../../../../service/validaciones.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-curso',
  templateUrl: './update-curso.component.html',
  styleUrl: './update-curso.component.css'
})
export class UpdateCursoComponent implements OnInit{
  data:Curso=new CursoResponse();
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
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]]
    });

    this.connectionService.getCurso(this.id).subscribe(data=>{
      this.data=data;
      this.obtenerDatos();
    });
  }

  obtenerDatos(){
    this.form.patchValue({
      nombre:this.data.nombre,
      descripcion:this.data.descripcion,
    });
  }

  updateData(){
    if (this.form.valid) {
      this.data={
       idCurso:Number(this.id),
       nombre: this.form.get('nombre')?.value,
       descripcion: this.form.get('descripcion')?.value,
     }

      this.connectionService.putCurso(this.data).subscribe(
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
          } else { console.error(response.message);}
        },
        (error) => {console.error(error);}
      );
    }
    else {
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
