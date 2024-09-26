import { Component } from '@angular/core';
import { Apoderado, ApoderadoResponse } from '../../../../../interface/Apoderado';
import { ConnectionService } from '../../../../../service/connection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-apoderado',
  templateUrl: './update-apoderado.component.html',
  styleUrl: './update-apoderado.component.css'
})
export class UpdateApoderadoComponent {
  data:Apoderado=new ApoderadoResponse();
  id:string='';

  constructor(
    private connectionService:ConnectionService,
    private router: Router){}
    
  ngOnInit(): void {
    const urlSegments =this.router.url.split('/')
    this.id=urlSegments[urlSegments.length-1];
    this.connectionService.getApoderado(this.id).subscribe(data=>{
      this.data=data;
    });
  }

  updateData(){
    this.connectionService.putApoderado(this.data).subscribe();
  }
}
