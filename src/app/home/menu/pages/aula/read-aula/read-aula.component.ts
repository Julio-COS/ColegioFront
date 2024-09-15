import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../../../../../service/connection.service';
import { Aula } from '../../../../../interface/Aula';
import { getEntityPropiedades } from '../../../../../interface/actionTableColumn';

@Component({
  selector: 'app-read-aula',
  templateUrl: './read-aula.component.html',
  styleUrl: './read-aula.component.css'
})
export class ReadAulaComponent implements OnInit {
  dataSource:Aula[]=[];
  columnas:string[]=[];
  title:string="Aula";

  constructor(private connectionService:ConnectionService){}

  ngOnInit(): void {
    this.columnas=getEntityPropiedades(this.title);
    this.connectionService.getAulas().subscribe(data=>{
      this.dataSource=data;
    })
  }

}
