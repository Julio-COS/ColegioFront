import { Component } from '@angular/core';
import { Matricula } from '../../../../../interface/Matricula';
import { ConnectionService } from '../../../../../service/connection.service';
import { getEntityPropiedades } from '../../../../../interface/actionTableColumn';

@Component({
  selector: 'app-read-matricula',
  templateUrl: './read-matricula.component.html',
  styleUrl: './read-matricula.component.css'
})
export class ReadMatriculaComponent {
  dataSource:Matricula[]=[];
  columnas:string[]=[];
  title:string="Matricula";

  constructor(private connectionService:ConnectionService){}

  ngOnInit(): void {
    this.columnas=getEntityPropiedades(this.title);
    this.connectionService.getMatriculas().subscribe(data=>{
      this.dataSource=data;
    })
  }
}
