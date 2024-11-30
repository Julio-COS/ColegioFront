import { Component, EventEmitter, Input, OnInit, Output, ViewChild, AfterViewInit } from '@angular/core';
import { Accion, classIcon } from '../../../interface/actionTableColumn';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent implements OnInit, AfterViewInit{
  /* -------------------------------------------------------------- */
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource = new MatTableDataSource<any>([]);
  /* --------------------------------------------------------------- */
  displayedColumns: string[] = [];
  /* dataSource:any=[]; */
  columnas:string[]=[];
  acciones:string[]=[];
  title='';

  @Input() set titulo(title:any){
    this.title=title;
  }

  @Input() set columns(columns: string[]){
    this.columnas=columns;
    //--------------------------------------------------------------
    this.displayedColumns = [...this.columnas];
    if (this.acciones.length > 0) {
      this.displayedColumns.push('acciones'); 
    }
    //--------------------------------------------------------------
  }

  @Input() set data(data:any){
    /* this.dataSource=data; */
    this.dataSource = new MatTableDataSource(data);
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  @Input() set accion(data: string[]) {
    this.acciones = data;
    //-------------------------------------------------------------------
    if (data.length > 0 && !this.displayedColumns.includes('acciones')) {
      this.displayedColumns.push('acciones');
    }
    //-------------------------------------------------------------------
  }

  @Output() action: EventEmitter<Accion> = new EventEmitter();

  onAction(accion:string, row?:any){
    this.action.emit({accion:accion,fila:row});
  }

  getIcon(accion: string): string[] {
    return classIcon(accion);
  }
/* Por realizar */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

  } 
  constructor() {}

  ngOnInit() {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

