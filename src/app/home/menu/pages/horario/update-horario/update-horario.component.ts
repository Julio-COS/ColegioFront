import { Component } from '@angular/core';
import { Horario, HorarioResponse } from '../../../../../interface/Horario';
import { ConnectionService } from '../../../../../service/connection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-horario',
  templateUrl: './update-horario.component.html',
  styleUrl: './update-horario.component.css'
})
export class UpdateHorarioComponent {
  data:Horario=new HorarioResponse();
  id:string='';

  constructor(private connectionService:ConnectionService, private router: Router){}
  ngOnInit(): void {
    const urlSegments =this.router.url.split('/')
    this.id=urlSegments[urlSegments.length-1];
    this.connectionService.getHorario(this.id).subscribe(data=>{
      this.data=data;
    });
  }

  update(){
    this.connectionService.putHorario(this.data).subscribe();
  }
}
