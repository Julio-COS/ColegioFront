import { Component, OnInit } from '@angular/core';
import { Matricula, MatriculaResponse } from '../../../../../interface/Matricula';
import { ConnectionService } from '../../../../../service/connection.service';
import { Router } from '@angular/router';
import { MatriculaVacanciaInfo } from '../../../../../interface/MatriculaVacancia';
import { Alumno } from '../../../../../interface/Alumno';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { format } from 'date-fns';
import { ValidacionesService } from '../../../../../service/validaciones.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-matricula',
  templateUrl: './update-matricula.component.html',
  styleUrl: './update-matricula.component.css'
})
export class UpdateMatriculaComponent implements OnInit {
  data:Matricula=new MatriculaResponse();
  form!: FormGroup;
  id:string='';

  dataMatriculaV:MatriculaVacanciaInfo[]=[];
  dataEstudiante:Alumno[]=[];

  constructor(
    private connectionService:ConnectionService,
    private router: Router
  ){}

  ngOnInit(): void {
    const urlSegments =this.router.url.split('/')
    this.id=urlSegments[urlSegments.length-1];

    this.form = new FormBuilder().group({
      idMVacancia: ['', [Validators.required]],
      idEstudiante: ['', [Validators.required]],
      fechaRegistro: [{ value: format(new Date(),'yyyy-MM-dd'), disabled: true }],
      estado: ['', [Validators.required]],
    });

    this.connectionService.getMatricula(this.id).subscribe(data=>{
      this.data=data;
      this.obtenerDatos();
      this.connectionService.getMatriculaVacancias().subscribe(
        data=>{
          this.dataMatriculaV=data;
        });
      this.connectionService.getAlumnos().subscribe(
        data=>{
          this.dataEstudiante=data;
      });
    });
  }

  obtenerDatos(): void{
    this.form.patchValue({
      idMVacancia:this.data.idMVacancia,
      idEstudiante:this.data.idEstudiante,
      fechaRegistro: format(this.data.fechaRegistro,'yyyy-MM-dd'),
      estado:this.data.estado,
    });

  }

  handleMVSeleccionado(idMVacancia:number){
    this.data.idMVacancia = idMVacancia;
  }
  handleEstudianteSeleccionado(idEstudiante:number){
    this.data.idEstudiante = idEstudiante;
  }
  
  updateData(){
    if (this.form.valid) {

      this.data={
        idMatricula:Number(this.id),
        idMVacancia: this.form.get('idMVacancia')?.value,
        idEstudiante: this.form.get('idEstudiante')?.value,
        fechaRegistro: this.form.get('fechaRegistro')?.value,
        estado: this.form.get('estado')?.value,
      }

      this.connectionService.putMatricula(this.data).subscribe(
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
    this.router.navigate([`/menu/matricula`]);
  }

}

