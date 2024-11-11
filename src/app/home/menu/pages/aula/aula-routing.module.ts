import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadAulaComponent } from './read-aula/read-aula.component';
import { CreateAulaComponent } from './create-aula/create-aula.component';
import { UpdateAulaComponent } from './update-aula/update-aula.component';

const routes: Routes = [
  {path:'',component:ReadAulaComponent},
  {path:'create',component:CreateAulaComponent},
  {path:'update/:id',component:UpdateAulaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AulaRoutingModule { }
