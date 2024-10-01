import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComprobantePagoRoutingModule } from './comprobante-pago-routing.module';
import { ReadComprobantePagoComponent } from './read-comprobante-pago/read-comprobante-pago.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';


@NgModule({
  declarations: [
    ReadComprobantePagoComponent
  ],
  imports: [
    CommonModule,
    ComprobantePagoRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    
  ]
})
export class ComprobantePagoModule { }
