import { Component } from '@angular/core';
import { Matricula } from '../../../../../interface/Matricula';
import { ConnectionService } from '../../../../../service/connection.service';
import { Accion, getEntityPropiedades } from '../../../../../interface/actionTableColumn';
import { Router } from '@angular/router';

@Component({
  selector: 'app-read-matricula',
  templateUrl: './read-matricula.component.html',
  styleUrl: './read-matricula.component.css'
})
export class ReadMatriculaComponent {
  dataSource:Matricula[]=[];
  columnas:string[]=[];
  title:string="Matricula";

  constructor(private connectionService:ConnectionService, private router:Router){}

  ngOnInit(): void {
    this.columnas=getEntityPropiedades(this.title);
    this.connectionService.getMatriculas().subscribe(data=>{
      this.dataSource=data;
    })
  }
  onAction(accion:Accion){
    if(accion.accion == 'Editar'){
      this.update(accion.fila);
    } else if(accion.accion=='Eliminar'){
      this.delete(accion.fila.idMatricula);
    }
  } 

  update(data:any){
    this.router.navigate([this.router.url+'/update', data.idMatricula]);
  }
  delete(id:string){
    this.connectionService.deleteMatricula(id).subscribe();
    location.reload()
  }
}
