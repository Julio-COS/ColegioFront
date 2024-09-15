import { Component } from '@angular/core';
import { Docente, DocenteResponse } from '../../../../../interface/Docente';
import { ConnectionService } from '../../../../../service/connection.service';
import { Router } from '@angular/router';
import { Accion } from '../../../../../interface/actionTableColumn';

@Component({
  selector: 'app-create-docente',
  templateUrl: './create-docente.component.html',
  styleUrl: './create-docente.component.css'
})
export class CreateDocenteComponent {
  data:Docente=new DocenteResponse();

  constructor(private connectionService:ConnectionService, private router:Router){}

  addData(){
    this.connectionService.postDocente(this.data).subscribe();
  }
  onAction(accion:Accion){
    if(accion.accion == 'Editar'){
      this.update(accion.fila);
    } else if(accion.accion=='Eliminar'){
      this.delete(accion.fila.idDocente);
    }
  } 

  update(data:any){
    this.router.navigate([this.router.url+'/update', data.idDocente]);
  }
  delete(id:string){
    this.connectionService.deleteDocente(id).subscribe();
    location.reload()
  }
}
