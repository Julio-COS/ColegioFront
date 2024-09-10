import { Component } from '@angular/core';
import { Docente } from '../../../../../interface/Docente';
import { ConnectionService } from '../../../../../service/connection.service';
import { getEntityPropiedades } from '../../../../../interface/actionTableColumn';

@Component({
  selector: 'app-read-docente',
  templateUrl: './read-docente.component.html',
  styleUrl: './read-docente.component.css'
})
export class ReadDocenteComponent {
  dataSource:Docente[]=[];
  columnas:string[]=[];
  title:string="Docente";

  constructor(private connectionService:ConnectionService){}

  ngOnInit(): void {
    this.columnas=getEntityPropiedades(this.title);
    this.connectionService.getDocente().subscribe(data=>{
      this.dataSource=data;
    })
  }
}
