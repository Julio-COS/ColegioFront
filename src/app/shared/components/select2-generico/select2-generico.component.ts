import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Select2Data } from 'ng-select2-component';

@Component({
  selector: 'app-select2-generico',
  templateUrl: './select2-generico.component.html',
  styleUrl: './select2-generico.component.css'
})
export class Select2GenericoComponent<T> implements OnInit{
  @Input() data: T[] = [];
  @Input() idField: keyof T = '' as keyof T;
  @Input() labelFields: (keyof T)[] = [];
  @Input() placeholder: string = 'Selecciona una opción';
  
  @Output() itemSeleccionado = new EventEmitter<number>();
  
  opciones: Select2Data = [];
  selectedValue!: string;

  ngOnInit() {
    this.convertirDataToSelect2();
  }

  convertirDataToSelect2() {
    this.opciones = this.data.map(item => ({
      value: String(item[this.idField]),
      label: this.labelFields.map(field => item[field]).join(' ')
    }));
  }

  onUpdate() {
    this.itemSeleccionado.emit(Number(this.selectedValue));
  }
}
