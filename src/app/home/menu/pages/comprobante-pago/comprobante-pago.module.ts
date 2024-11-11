import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComprobantePagoRoutingModule } from './comprobante-pago-routing.module';
import { ReadComprobantePagoComponent } from './read-comprobante-pago/read-comprobante-pago.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

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
    MatCardModule,
    MatButtonModule
  ]
})
export class ComprobantePagoModule { }
