import { Component, OnInit } from '@angular/core';
import { MatriculaVacancia, MatriculaVacanciaResponse } from '../../../../../interface/MatriculaVacancia';
import { ConnectionService } from '../../../../../service/connection.service';

import { Aula } from '../../../../../interface/Aula';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidacionesService } from '../../../../../service/validaciones.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-mvacancia',
  templateUrl: './create-mvacancia.component.html',
  styleUrl: './create-mvacancia.component.css'
})
export class CreateMVacanciaComponent implements OnInit{
  data:MatriculaVacancia=new MatriculaVacanciaResponse();
  dataAula:Aula[]=[];
  form!: FormGroup;

  constructor(
    private connectionService:ConnectionService,
    private formBuldier:FormBuilder,
    private validacionService:ValidacionesService,
    private router:Router
  ){}

  ngOnInit(): void {
    this.form = new FormBuilder().group({
      idAula: ['', [Validators.required]],
      disponibilidadActual: [{ value: 0, disabled: true }],
      disponibilidadTotal: ['', [Validators.required, Validators.pattern(/^[0-9]{2}$/)]]
    })

    this.connectionService.getAulas().subscribe(
      data=>{
        this.dataAula=data
      });
  }

  handleAulaSeleccionado(idAula:number){
    this.data.idAula = idAula;
  }

  addData(){

    if (this.form.valid) {

      this.data={
        idAula: this.form.get('idAula')?.value,
        disponibilidadActual: this.form.get('disponibilidadActual')?.value,
        disponibilidadTotal: this.form.get('disponibilidadTotal')?.value,
      }


      this.connectionService.postMatriculaVacancia(this.data).subscribe(
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
    this.router.navigate([`/menu/matricula-vacancia`]);
  }
}
