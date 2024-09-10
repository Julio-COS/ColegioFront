import { Component } from '@angular/core';
import { Horario } from '../../../../../interface/Horario';
import { ConnectionService } from '../../../../../service/connection.service';
import { getEntityPropiedades } from '../../../../../interface/actionTableColumn';

@Component({
  selector: 'app-read-horario',
  templateUrl: './read-horario.component.html',
  styleUrl: './read-horario.component.css'
})
export class ReadHorarioComponent {
  dataSource:Horario[]=[];
  columnas:string[]=[];
  title:string="Horario";

  constructor(private connectionService:ConnectionService){}

  ngOnInit(): void {
    this.columnas=getEntityPropiedades(this.title);
    this.connectionService.getHorario().subscribe(data=>{
      this.dataSource=data;
    })
  }
}
