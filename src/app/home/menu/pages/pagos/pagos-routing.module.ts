import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePagoComponent } from './create-pago/create-pago.component';
import { UpdatePagoComponent } from './update-pago/update-pago.component';
import { ReadPagoComponent } from './read-pago/read-pago.component';

const routes: Routes = [ 
  {path:'',component:ReadPagoComponent},
  {path:'create/:id',component:CreatePagoComponent},
  {path:'update/:id',component:UpdatePagoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagosRoutingModule { }
