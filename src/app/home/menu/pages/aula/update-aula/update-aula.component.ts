import { Component } from '@angular/core';
import { ConnectionService } from '../../../../../service/connection.service';
import { Router } from '@angular/router';
import { Aula, AulaResponse } from '../../../../../interface/Aula';

@Component({
  selector: 'app-update-aula',
  templateUrl: './update-aula.component.html',
  styleUrl: './update-aula.component.css'
})
export class UpdateAulaComponent {
  data:Aula=new AulaResponse();
  id:string='';

  constructor(private connectionService:ConnectionService, private router: Router){}
  ngOnInit(): void {
    const urlSegments =this.router.url.split('/')
    this.id=urlSegments[urlSegments.length-1];
    this.connectionService.getAula(this.id).subscribe(data=>{
      this.data=data;
    });
  }

  update(){
    this.connectionService.putAula(this.data).subscribe();
  }
}
