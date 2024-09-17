import { Component } from '@angular/core';
import { Alumno, AlumnoResponse } from '../../../../../interface/Alumno';
import { ConnectionService } from '../../../../../service/connection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-alumno',
  templateUrl: './update-alumno.component.html',
  styleUrl: './update-alumno.component.css'
})
export class UpdateAlumnoComponent {
  data:Alumno=new AlumnoResponse();
  id:string='';

  constructor(private connectionService:ConnectionService, private router: Router){}
  ngOnInit(): void {
    const urlSegments =this.router.url.split('/')
    this.id=urlSegments[urlSegments.length-1];
    this.connectionService.getAlumno(this.id).subscribe(data=>{
      this.data=data;
    });
  }

  updateData(){
    this.connectionService.putAlumno(this.data).subscribe();
  }
}
