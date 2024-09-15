import { Component } from '@angular/core';
import { MatriculaVacancia, MatriculaVacanciaInfo } from '../../../../../interface/MatriculaVacancia';
import { ConnectionService } from '../../../../../service/connection.service';
import { getEntityPropiedades } from '../../../../../interface/actionTableColumn';

@Component({
  selector: 'app-read-mvacancia',
  templateUrl: './read-mvacancia.component.html',
  styleUrl: './read-mvacancia.component.css'
})
export class ReadMVacanciaComponent {
  dataSource:MatriculaVacanciaInfo[]=[];
  columnas:string[]=[];
  title:string="MatriculaVacancia";

  constructor(private connectionService:ConnectionService){}

  ngOnInit(): void {
    this.columnas=getEntityPropiedades(this.title);
    this.connectionService.getMatriculaVacancias().subscribe(data=>{
      this.dataSource=data;
    })
  }
}
