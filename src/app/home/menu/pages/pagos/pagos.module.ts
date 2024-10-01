import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagosRoutingModule } from './pagos-routing.module';
import { CreatePagoComponent } from './create-pago/create-pago.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdatePagoComponent } from './update-pago/update-pago.component';
import { ReadPagoComponent } from './read-pago/read-pago.component';
import { SharedModule } from '../../../../shared/shared.module';


@NgModule({
  declarations: [
    CreatePagoComponent,
    UpdatePagoComponent,
    ReadPagoComponent
  ],
  imports: [
    CommonModule,
    PagosRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class PagosModule { }
