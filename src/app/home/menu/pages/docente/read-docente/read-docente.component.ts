import { Component } from '@angular/core';
import { Docente } from '../../../../../interface/Docente';
import { ConnectionService } from '../../../../../service/connection.service';
import { Accion, getEntityPropiedades } from '../../../../../interface/actionTableColumn';
import { Router } from '@angular/router';

@Component({
  selector: 'app-read-docente',
  templateUrl: './read-docente.component.html',
  styleUrl: './read-docente.component.css'
})
export class ReadDocenteComponent {
  dataSource:Docente[]=[];
  columnas:string[]=[];
  title:string="Docente";

  constructor(private connectionService:ConnectionService, private router:Router){}

  ngOnInit(): void {
    this.columnas=getEntityPropiedades(this.title);
    this.connectionService.getDocentes().subscribe(data=>{
      this.dataSource=data;
    })
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
    this.connectionService.deleteCurso(id).subscribe();
    location.reload()
  }
}
