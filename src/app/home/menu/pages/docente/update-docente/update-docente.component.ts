import { Component } from '@angular/core';
import { Docente, DocenteResponse } from '../../../../../interface/Docente';
import { ConnectionService } from '../../../../../service/connection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-docente',
  templateUrl: './update-docente.component.html',
  styleUrl: './update-docente.component.css'
})
export class UpdateDocenteComponent {
  data:Docente=new DocenteResponse();
  id:string='';

  constructor(private connectionService:ConnectionService, private router: Router){}
  ngOnInit(): void {
    const urlSegments =this.router.url.split('/')
    this.id=urlSegments[urlSegments.length-1];
    this.connectionService.getDocente(this.id).subscribe(data=>{
      this.data=data;
    });
  }

  updateData(){
    this.connectionService.putDocente(this.data).subscribe();
  }

  regresar(){
    this.router.navigate([`/menu/docente`]);
  }
}
