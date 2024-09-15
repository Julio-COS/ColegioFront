import { Component } from '@angular/core';
import { Matricula, MatriculaResponse } from '../../../../../interface/Matricula';
import { ConnectionService } from '../../../../../service/connection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-matricula',
  templateUrl: './update-matricula.component.html',
  styleUrl: './update-matricula.component.css'
})
export class UpdateMatriculaComponent {
  data:Matricula=new MatriculaResponse();
  id:string='';

  constructor(private connectionService:ConnectionService, private router: Router){}
  ngOnInit(): void {
    const urlSegments =this.router.url.split('/')
    this.id=urlSegments[urlSegments.length-1];
    this.connectionService.getMatricula(this.id).subscribe(data=>{
      this.data=data;
    });
  }

  update(){
    this.connectionService.putMatricula(this.data).subscribe();
  }
}
