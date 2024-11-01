import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidacionesService {

  constructor() { }

  isCantidadNroDocumento(form: FormGroup, controlName: string, cantidad: number) {
    const control = form.get(controlName);
    if (control && control.value) {
      return control.value.length !== cantidad;
    }
    return false;
  }

  isCantidadExacta(form: FormGroup, controlName: string) {
    const control = form.get(controlName);
    return control?.errors && (control?.errors['maxlength'] || control?.errors['minlength']);
  }

  isCantidad(form: FormGroup, controlName: string) {
    const control = form.get(controlName);
    return control?.errors && control?.errors['maxlength'];
  }

  isInvalid(form: FormGroup, controlName: string) {
    const control = form.get(controlName);
    return control?.invalid && control?.touched;
  }

  isRequerido(form: FormGroup, controlName: string) {
    const control = form.get(controlName);
    return control?.errors && control.errors['required'];
  }

  markAllFieldsAsTouched(form: FormGroup) {
    Object.values(form.controls).forEach((control) => {
      control.markAsTouched();
    });
  }

  soloNumeros(event: Event) {
    const input = event.target as HTMLInputElement;
    const currentValue = input.value;
    input.value = currentValue.replace(/[^0-9]/g, '');
  }
}
