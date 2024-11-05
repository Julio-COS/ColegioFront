import { Component } from '@angular/core';
import { RelacionApoderado, RelacionApoderadoResponse } from '../../../../../interface/RelacionApoderado';
import { Router } from '@angular/router';
import { ConnectionService } from '../../../../../service/connection.service';

import { Alumno } from '../../../../../interface/Alumno';
import { Apoderado } from '../../../../../interface/Apoderado';
import { ValidacionesService } from '../../../../../service/validaciones.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-relacion-apoderado',
  templateUrl: './update-relacion-apoderado.component.html',
  styleUrl: './update-relacion-apoderado.component.css'
})
export class UpdateRelacionApoderadoComponent {
  data:RelacionApoderado=new RelacionApoderadoResponse();
  form!: FormGroup;
  id:string='';

  dataApoderado:Apoderado[]=[];
  dataEstudiante:Alumno[]=[];
  
  constructor(
    private connectionService:ConnectionService,
    private router: Router){}

  ngOnInit(): void {
    const urlSegments =this.router.url.split('/')
    this.id=urlSegments[urlSegments.length-1];

    this.form = new FormBuilder().group({
      idEstudiante: ['', [Validators.required]],
      idApoderado: ['', [Validators.required]],
      tipoRelacion: ['', [Validators.required]],
    })

    this.connectionService.getRelacionApoderado(this.id).subscribe(data=>{
      this.data=data;
      this.obtenerDatos();
      this.connectionService.getApoderados().subscribe(
        data=>{
          this.dataApoderado=data;
        });
      this.connectionService.getAlumnos().subscribe(
        data=>{
          this.dataEstudiante=data;
      });
    });
  }

  obtenerDatos(): void{
    this.form.patchValue({
      idEstudiante: this.data.idEstudiante,
      idApoderado: this.data.idApoderado,
      tipoRelacion: this.data.tipoRelacion,
    });
  }

  handleAlumnoSeleccionado(idEstudiante:number){
    this.data.idEstudiante = idEstudiante;
  }

  handleApoderadoSeleccionado(idApodreado:number){
    this.data.idApoderado = idApodreado;
  }
  

  updateData(){
    if (this.form.valid) {

      this.data={
        idRelacionApoderado:Number(this.id),
        idEstudiante: this.form.get('idEstudiante')?.value,
        idApoderado: this.form.get('idApoderado')?.value,
        tipoRelacion: this.form.get('tipoRelacion')?.value,
     }

      this.connectionService.putRelacionApoderado(this.data).subscribe(
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
    this.router.navigate([`/menu/relacion-apoderado`]);
  }
}
