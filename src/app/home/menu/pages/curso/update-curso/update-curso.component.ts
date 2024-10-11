import { Component, OnInit } from '@angular/core';
import { Curso, CursoResponse } from '../../../../../interface/Curso';
import { ConnectionService } from '../../../../../service/connection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-curso',
  templateUrl: './update-curso.component.html',
  styleUrl: './update-curso.component.css'
})
export class UpdateCursoComponent implements OnInit{
  data:Curso=new CursoResponse();
  id:string='';

  constructor(private connectionService:ConnectionService, private router: Router){}
  ngOnInit(): void {
    const urlSegments =this.router.url.split('/')
    this.id=urlSegments[urlSegments.length-1];
    this.connectionService.getCurso(this.id).subscribe(data=>{
      this.data=data;
    });
  }

  updateData(){
    this.connectionService.putCurso(this.data).subscribe();
  }

  regresar(){
    this.router.navigate([`/menu/curso`]);
  }
}
