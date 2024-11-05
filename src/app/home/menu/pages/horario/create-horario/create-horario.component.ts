import { Component, OnInit } from '@angular/core';
import { Horario, HorarioResponse } from '../../../../../interface/Horario';
import { ConnectionService } from '../../../../../service/connection.service';
import { Aula } from '../../../../../interface/Aula';
import { Docente } from '../../../../../interface/Docente';
import { Curso } from '../../../../../interface/Curso';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidacionesService } from '../../../../../service/validaciones.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-create-horario',
  templateUrl: './create-horario.component.html',
  styleUrl: './create-horario.component.css'
})
export class CreateHorarioComponent implements OnInit{
  data:Horario=new HorarioResponse();
  form!: FormGroup;

  dataAula:Aula[]=[];
  dataDocente:Docente[]=[];
  dataCurso:Curso[]=[];
    
  constructor(
    private connectionService:ConnectionService,
    private router:Router
  ){}
  
  ngOnInit(): void {
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

    this.form = new FormBuilder().group({
      idAula:['', [Validators.required]],
      idDocente:['', [Validators.required]],
      idCurso:['', [Validators.required]],
      Fecha_inicio:['', [Validators.required]],
      Fecha_final:['', [Validators.required]],
      hora_inicio:['', [Validators.required]],
      hora_final:['', [Validators.required]],
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


  addData(){
    if (this.form.valid) {

      this.data={
        idAula: this.form.get('idAula')?.value,
        idDocente: this.form.get('idDocente')?.value,
        idCurso: this.form.get('idCurso')?.value,
        Fecha_inicio: this.form.get('Fecha_inicio')?.value,
        Fecha_final: this.form.get('Fecha_final')?.value,
        hora_inicio: this.form.get('hora_inicio')?.value,
        hora_final: this.form.get('hora_final')?.value,
      }

      this.connectionService.postHorario(this.data).subscribe(
        (response) => {
          if (response.isSuccess) {
            Swal.fire({
              title: 'Registrando...',
              allowOutsideClick: false,
            })
            Swal.showLoading();
            Swal.close();
            Swal.fire('Correcto', 'Alumno registrado en el sistema correctamente.', 'success');
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
    this.router.navigate([`/menu/horario`]);
  }
}
