import { Component, OnInit } from '@angular/core';
import { MatriculaVacancia, MatriculaVacanciaResponse } from '../../../../../interface/MatriculaVacancia';
import { ConnectionService } from '../../../../../service/connection.service';
import { Router } from '@angular/router';
import { Aula } from '../../../../../interface/Aula';
import Swal from 'sweetalert2';
import { ValidacionesService } from '../../../../../service/validaciones.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-update-mvacancia',
  templateUrl: './update-mvacancia.component.html',
  styleUrl: './update-mvacancia.component.css'
})
export class UpdateMVacanciaComponent implements OnInit {
  data:MatriculaVacancia=new MatriculaVacanciaResponse();
  form!: FormGroup;
  id:string='';

  dataAula:Aula[]=[];

  constructor(private connectionService:ConnectionService, private router: Router){}
  ngOnInit(): void {
    const urlSegments =this.router.url.split('/')
    this.id=urlSegments[urlSegments.length-1];

    this.form = new FormBuilder().group({
      idAula: ['', [Validators.required]],
      disponibilidadActual: [{ value: 0, disabled: true }],
      disponibilidadTotal: ['', [Validators.required, Validators.pattern(/^[0-9]{2}$/)]]
    })

    this.connectionService.getMatriculaVacancia(this.id).subscribe(data=>{
      this.data=data;
      this.connectionService.getAulas().subscribe(
        data=>{
          this.dataAula=data
          this.obtenerDatos();
        });
    });
  }

  handleAulaSeleccionado(idAula:number){
    this.data.idAula = idAula;
  }
  obtenerDatos(): void{
    this.form.patchValue({
      idAula: this.data.idAula,
      disponibilidadActual: this.data.disponibilidadActual,
      disponibilidadTotal: this.data.disponibilidadTotal,
    });
  }
  updateData(){
    
    if (this.form.valid) {

      this.data={
        idMVacancia:Number(this.id),
        idAula: this.form.get('idAula')?.value,
        disponibilidadActual: this.form.get('disponibilidadActual')?.value,
        disponibilidadTotal: this.form.get('disponibilidadTotal')?.value,
      }

      this.connectionService.putMatriculaVacancia(this.data).subscribe(
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
