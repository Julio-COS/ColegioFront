import { Component } from '@angular/core';
import { Horario, HorarioInfo } from '../../../../../interface/Horario';
import { ConnectionService } from '../../../../../service/connection.service';
import { Accion, getEntityPropiedades } from '../../../../../interface/actionTableColumn';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-read-horario',
  templateUrl: './read-horario.component.html',
  styleUrl: './read-horario.component.css'
})
export class ReadHorarioComponent {
  dataSource:HorarioInfo[]=[];
  columnas:string[]=[];
  acciones:string[]=[];
  title:string="Horario";

  constructor(private connectionService:ConnectionService, private router:Router){}

  ngOnInit(): void {
    this.columnas=getEntityPropiedades(this.title);
    this.acciones = ['Editar', 'Eliminar'];
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
    Swal.fire({
      title: '¿Estas seguro que deseas eliminar?',
      showDenyButton: true,
      confirmButtonText: 'Eliminar',
      denyButtonText: `Cancelar`,
  }).then((result) => {
      if (result.isConfirmed) {
        this.connectionService.deleteHorario(id).subscribe(
              (response) => {
                  if (response.isSuccess) {
                      Swal.fire(response.message,'', 'success');
                      location.reload()
                      return;
                  } else {
                      console.error(response.message);
                  }
              },
              (error) => {
                  console.error(error);
              });
      } else {
          return;
      }
    });
  }
}
