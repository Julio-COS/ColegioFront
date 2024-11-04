import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../../../../../service/connection.service';
import { Router } from '@angular/router';
import { Aula, AulaResponse } from '../../../../../interface/Aula';
import { ValidacionesService } from '../../../../../service/validaciones.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    this.connectionService.putAula(this.data).subscribe();
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
