import { Component } from '@angular/core';
import { Apoderado, ApoderadoResponse } from '../../../../../interface/Apoderado';
import { ConnectionService } from '../../../../../service/connection.service';
import { Router } from '@angular/router';
import { ValidacionesService } from '../../../../../service/validaciones.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-apoderado',
  templateUrl: './update-apoderado.component.html',
  styleUrl: './update-apoderado.component.css'
})
export class UpdateApoderadoComponent {
  data:Apoderado=new ApoderadoResponse();
  form!: FormGroup;
  id:string='';

  constructor(
    private connectionService:ConnectionService,
    private formBuldier:FormBuilder,
    private validacionService:ValidacionesService,
    private router: Router
  ){}
    
  ngOnInit(): void {
    const urlSegments =this.router.url.split('/')
    this.id=urlSegments[urlSegments.length-1];

    this.form = this.formBuldier.group({
      nombres: ['', [Validators.required]],
      apellidoP: ['', [Validators.required]],
      apellidoM: ['', [Validators.required]],
      dni: ['', [Validators.required, Validators.pattern(/^[0-9]{8}$/)]],
      telefono: ['', [Validators.required, Validators.pattern(/^[0-9]{9}$/)]],
      direccion:['', [Validators.required]]
    })

    this.connectionService.getApoderado(this.id).subscribe(data=>{
      this.data=data;
      this.obtenerDatos();
    });
  }

  obtenerDatos(){
    this.form.patchValue({
      nombres: this.data.nombres,
      apellidoP: this.data.apellidoP,
      apellidoM: this.data.apellidoM,
      dni: this.data.dni,
      telefono: this.data.telefono,
      direccion: this.data.direccion,
    })

  }

  updateData(){
    if (this.form.valid) {

      this.data={
       idApoderado:Number(this.id),
       nombres: this.form.get('nombres')?.value,
       apellidoP: this.form.get('apellidoP')?.value,
       apellidoM: this.form.get('apellidoM')?.value,
       dni: this.form.get('dni')?.value,
       telefono: this.form.get('telefono')?.value,
       direccion: this.form.get('direccion')?.value,
     }

     this.connectionService.putApoderado(this.data).subscribe(
       (response) => {
         if (response.isSuccess) {
           Swal.fire({
             title: 'Registrando...',
             allowOutsideClick: false,
           })
           Swal.showLoading();
           Swal.close();
           Swal.fire('Correcto', 'Apoderado registrado en el sistema correctamente.', 'success');
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
