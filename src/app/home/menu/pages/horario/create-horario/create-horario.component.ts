import { Component } from '@angular/core';
import { Horario, HorarioResponse } from '../../../../../interface/Horario';
import { ConnectionService } from '../../../../../service/connection.service';

@Component({
  selector: 'app-create-horario',
  templateUrl: './create-horario.component.html',
  styleUrl: './create-horario.component.css'
})
export class CreateHorarioComponent {
  data:Horario=new HorarioResponse();

  constructor(private connectionService:ConnectionService){}

  addData(){
    this.connectionService.postHorario(this.data).subscribe();
    this.data=new HorarioResponse();
  }
}
