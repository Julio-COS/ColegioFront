import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Select2Data } from 'ng-select2-component';

@Component({
  selector: 'app-select2-generico',
  templateUrl: './select2-generico.component.html',
  styleUrl: './select2-generico.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Select2GenericoComponent),
      multi: true
    }
  ]
})
export class Select2GenericoComponent<T> implements OnInit{
  @Input() data: T[] = [];
  @Input() idField: keyof T = '' as keyof T;
  @Input() labelFields: (keyof T)[] = [];
  @Input() placeholder: string = 'Selecciona una opción';
  @Input() desactivado: boolean=false;
  
  @Output() itemSeleccionado = new EventEmitter<number>();
  
  opciones: Select2Data = [];
  selectedValue!: string;

  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};

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
    const selectedId = Number(this.selectedValue);
    this.itemSeleccionado.emit(selectedId);
    this.onChange(selectedId);
    this.onTouched();
  }

  // Implementaciones de ControlValueAccessor

  writeValue(value: any): void {
    this.selectedValue = String(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
