import { Component, OnInit } from '@angular/core';
import { Horario, HorarioResponse } from '../../../../../interface/Horario';
import { ConnectionService } from '../../../../../service/connection.service';
import { Router } from '@angular/router';
import { Aula } from '../../../../../interface/Aula';

import { Docente } from '../../../../../interface/Docente';
import { Curso } from '../../../../../interface/Curso';
import { ValidacionesService } from '../../../../../service/validaciones.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { format } from 'date-fns';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-horario',
  templateUrl: './update-horario.component.html',
  styleUrl: './update-horario.component.css'
})
export class UpdateHorarioComponent implements OnInit{
  data:Horario=new HorarioResponse();
  form!: FormGroup;
  id:string='';

  dataAula:Aula[]=[];
  dataDocente:Docente[]=[];
  dataCurso:Curso[]=[];
  
  constructor(
    private connectionService:ConnectionService,
    private router: Router
  ){}

  ngOnInit(): void {
    const urlSegments =this.router.url.split('/')
    this.id=urlSegments[urlSegments.length-1];

    this.form = new FormBuilder().group({
      idAula:['', [Validators.required]],
      idDocente:['', [Validators.required]],
      idCurso:['', [Validators.required]],
      Fecha_inicio:['', [Validators.required]],
      Fecha_final:['', [Validators.required]],
      hora_inicio:['', [Validators.required]],
      hora_final:['', [Validators.required]],
    });

    this.connectionService.getHorario(this.id).subscribe(data=>{
      this.data=data;
      this.obtenerDatos();
      this.connectionService.getAulas().subscribe(
        data=>{
          this.dataAula=data
        });
      this.connectionService.getDocentes().subscribe(
        data=>{
          this.dataDocente=data
        });
      this.connectionService.getCursos().subscribe(
        data=>{
          this.dataCurso=data;
      });
    });
  }

  obtenerDatos(): void{
    this.form.patchValue({
      idAula: this.data.idAula,
      idDocente: this.data.idDocente,
      idCurso: this.data.idCurso,
      Fecha_inicio: format(this.data.Fecha_inicio,'yyyy-MM-dd'),
      Fecha_final: format(this.data.Fecha_final,'yyyy-MM-dd'),
      hora_inicio: this.data.hora_inicio,
      hora_final: this.data.hora_final,
    });

  }

  handleDocenteSeleccionado(idDocente:number){
    this.data.idDocente = idDocente;
  }
  handleCursoSeleccionado(idCurso:number){
    this.data.idCurso = idCurso;
  }
  handleAulaSeleccionado(idAula:number){
    this.data.idAula = idAula;
  }

  updateData(){
    if (this.form.valid) {

      this.data={
        idHorario:Number(this.id),
        idAula: this.form.get('idAula')?.value,
        idDocente: this.form.get('idDocente')?.value,
        idCurso: this.form.get('idCurso')?.value,
        Fecha_inicio: this.form.get('Fecha_inicio')?.value,
        Fecha_final: this.form.get('Fecha_final')?.value,
        hora_inicio: this.form.get('hora_inicio')?.value,
        hora_final: this.form.get('hora_final')?.value,
      }

    this.connectionService.putHorario(this.data).subscribe(
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
    this.router.navigate([`/menu/horario`]);
  }
}
