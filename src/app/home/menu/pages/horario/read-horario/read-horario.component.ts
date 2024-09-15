import { Component } from '@angular/core';
import { Horario, HorarioInfo } from '../../../../../interface/Horario';
import { ConnectionService } from '../../../../../service/connection.service';
import { Accion, getEntityPropiedades } from '../../../../../interface/actionTableColumn';
import { Router } from '@angular/router';

@Component({
  selector: 'app-read-horario',
  templateUrl: './read-horario.component.html',
  styleUrl: './read-horario.component.css'
})
export class ReadHorarioComponent {
  dataSource:HorarioInfo[]=[];
  columnas:string[]=[];
  title:string="Horario";

  constructor(private connectionService:ConnectionService, private router:Router){}

  ngOnInit(): void {
    this.columnas=getEntityPropiedades(this.title);
    this.connectionService.getHorarios().subscribe(data=>{
      this.dataSource=data;
    })
  }

  
  onAction(accion:Accion){
    if(accion.accion == 'Editar'){
      this.update(accion.fila);
    } else if(accion.accion=='Eliminar'){
      this.delete(accion.fila.idHorario);
    }
  } 

  update(data:any){
    this.router.navigate([this.router.url+'/update', data.idHorario]);
  }
  delete(id:string){
    console.log('delete',id);
  }
}
