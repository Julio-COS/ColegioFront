import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Accion, classIcon } from '../../../interface/actionTableColumn';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  dataSource:any=[];
  columnas:string[]=[];
  acciones:string[]=[];
  title='';

  @Input() set titulo(title:any){
    this.title=title;
  }

  @Input() set columns(columns: string[]){
    this.columnas=columns;
  }

  @Input() set data(data:any){
    this.dataSource=data;
  }

  @Input() set accion(data: string[]) {
    this.acciones = data;
  }

  @Output() action: EventEmitter<Accion> = new EventEmitter();

  onAction(accion:string, row?:any){
    this.action.emit({accion:accion,fila:row});
  }

  getIcon(accion: string): string[] {
    return classIcon(accion);
  }
}
