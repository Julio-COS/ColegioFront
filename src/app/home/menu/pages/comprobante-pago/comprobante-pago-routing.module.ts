import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadComprobantePagoComponent } from './read-comprobante-pago/read-comprobante-pago.component';

const routes: Routes = [
  {path:'',component:ReadComprobantePagoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComprobantePagoRoutingModule { }
