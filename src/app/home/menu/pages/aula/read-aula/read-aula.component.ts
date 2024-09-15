import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../../../../../service/connection.service';
import { Aula } from '../../../../../interface/Aula';
import { Accion, getEntityPropiedades } from '../../../../../interface/actionTableColumn';
import { Router } from '@angular/router';

@Component({
  selector: 'app-read-aula',
  templateUrl: './read-aula.component.html',
  styleUrl: './read-aula.component.css'
})
export class ReadAulaComponent implements OnInit {
  dataSource:Aula[]=[];
  columnas:string[]=[];
  title:string="Aula";

  constructor(private connectionService:ConnectionService, private router:Router){}

  ngOnInit(): void {
    this.columnas=getEntityPropiedades(this.title);
    this.connectionService.getAulas().subscribe(data=>{
      this.dataSource=data;
    })
  }
  onAction(accion:Accion){
    if(accion.accion == 'Editar'){
      this.update(accion.fila);
    } else if(accion.accion=='Eliminar'){
      this.delete(accion.fila.idAula);
    }
  } 

  update(data:any){
    this.router.navigate([this.router.url+'/update', data.idAula]);
  }
  delete(id:string){
    this.connectionService.deleteAula(id).subscribe();
    location.reload()
  }
}
