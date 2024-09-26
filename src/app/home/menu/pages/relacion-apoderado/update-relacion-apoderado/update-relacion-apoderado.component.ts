import { Component } from '@angular/core';
import { RelacionApoderado, RelacionApoderadoResponse } from '../../../../../interface/RelacionApoderado';
import { Router } from '@angular/router';
import { ConnectionService } from '../../../../../service/connection.service';
import { Select2Data } from 'ng-select2-component';
import { Alumno } from '../../../../../interface/Alumno';
import { Apoderado } from '../../../../../interface/Apoderado';

@Component({
  selector: 'app-update-relacion-apoderado',
  templateUrl: './update-relacion-apoderado.component.html',
  styleUrl: './update-relacion-apoderado.component.css'
})
export class UpdateRelacionApoderadoComponent {
  data:RelacionApoderado=new RelacionApoderadoResponse();
  id:string='';

  dataApoderado:Apoderado[]=[];
  dataEstudiante:Alumno[]=[];
  
  selectIdApoderado:string='';
  selectIdAlumno:string='';

  opciones1: Select2Data = [];
  opciones2: Select2Data = [];

  constructor(
    private connectionService:ConnectionService,
    private router: Router){}

  ngOnInit(): void {
    const urlSegments =this.router.url.split('/')
    this.id=urlSegments[urlSegments.length-1];
    this.connectionService.getRelacionApoderado(this.id).subscribe(data=>{
      this.data=data;
      this.connectionService.getApoderados().subscribe(
        data=>{
          this.dataApoderado=data
          this.selectIdApoderado=this.data.idApoderado.toString();
          this.conversionDataToSelect1();
        });
      this.connectionService.getAlumnos().subscribe(
        data=>{
          this.dataEstudiante=data;
          this.selectIdAlumno=this.data.idEstudiante.toString();
          this.conversionDataToSelect2();
      });
    });
  }

  update1(){
    this.data.idApoderado=Number(this.selectIdApoderado)
  }
  update2(){
    this.data.idEstudiante=Number(this.selectIdAlumno)
  }
  conversionDataToSelect1(){
    this.opciones1 = this.dataApoderado.map(apoderado => ({
      value: apoderado.idApoderado.toString(),  
      label: apoderado.nombres + " " +apoderado.apellidoP + " " +apoderado.apellidoM 
    }));
  }
  conversionDataToSelect2(){
    this.opciones2 = this.dataEstudiante.map(alumno => ({
      value: alumno.idEstudiante.toString(),  
      label: alumno.nombres +" "+ alumno.apePaterno +" "+ alumno.apeMaterno
    }));
  }
  

  updateData(){
    this.connectionService.putRelacionApoderado(this.data).subscribe();
  }
}
