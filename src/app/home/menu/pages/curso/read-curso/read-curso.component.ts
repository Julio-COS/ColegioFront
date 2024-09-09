import { Component } from '@angular/core';
import { Curso } from '../../../../../interface/Curso';
import { ConnectionService } from '../../../../../service/connection.service';
import { getEntityPropiedades } from '../../../../../interface/actionTableColumn';

@Component({
  selector: 'app-read-curso',
  templateUrl: './read-curso.component.html',
  styleUrl: './read-curso.component.css'
})
export class ReadCursoComponent {
  dataSource:Curso[]=[];
  columnas:string[]=[];
  title:string="Curso";

  constructor(private connectionService:ConnectionService){}

  ngOnInit(): void {
    this.columnas=getEntityPropiedades(this.title);
    this.connectionService.getCurso().subscribe(data=>{
      this.dataSource=data;
    })
  }

}
