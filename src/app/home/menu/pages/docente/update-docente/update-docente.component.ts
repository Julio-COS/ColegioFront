import { Component } from '@angular/core';
import { Docente, DocenteResponse } from '../../../../../interface/Docente';
import { ConnectionService } from '../../../../../service/connection.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { format } from 'date-fns';
import { ValidacionesService } from '../../../../../service/validaciones.service';

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
    this.connectionService.putDocente(this.data).subscribe();
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
