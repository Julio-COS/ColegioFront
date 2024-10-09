import { Component } from '@angular/core';
import { Alumno, AlumnoResponse } from '../../../../../interface/Alumno';
import { ConnectionService } from '../../../../../service/connection.service';
import { Router } from '@angular/router';
import { ValidacionesService } from '../../../../../service/validaciones.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { format } from 'date-fns';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-alumno',
  templateUrl: './update-alumno.component.html',
  styleUrl: './update-alumno.component.css'
})
export class UpdateAlumnoComponent {
  data:Alumno=new AlumnoResponse();
  form!: FormGroup;
  id:string='';

  constructor(
    private connectionService:ConnectionService,
    private formBuldier:FormBuilder,
    private validacionService:ValidacionesService,
    private router:Router
    ){}

  ngOnInit(): void {
    const urlSegments =this.router.url.split('/')
    this.id=urlSegments[urlSegments.length-1];

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

    this.connectionService.getAlumno(this.id).subscribe(data=>{
      this.data=data;
      this.obtenerDatos();
    });

  }

  obtenerDatos(){
    this.form.patchValue({
      nombres:this.data.nombres,
      apePaterno:this.data.apePaterno,
      apeMaterno:this.data.apeMaterno,
      dni:this.data.dni,
      genero:this.data.genero,
      telefono:this.data.telefono,
      fechaRegistro:format(this.data.fechaRegistro,'yyyy-MM-dd'),
      fechaNacimiento:format(this.data.fechaNacimiento,'yyyy-MM-dd'),
      direccion:this.data.direccion
    })
  }

  updateData(){
    if (this.form.valid) {

       this.data={
        idEstudiante:Number(this.id),
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

      this.connectionService.putAlumno(this.data).subscribe(
        (response) => {
          if (response.isSuccess) {
            Swal.fire({
              title: 'Registrando...',
              allowOutsideClick: false,
            })
            Swal.showLoading();
            Swal.close();
            Swal.fire('Correcto', 'Alumno Actualizado en el sistema correctamente.', 'success');
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

