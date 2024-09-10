import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadDocenteComponent } from './read-docente/read-docente.component';
import { CreateDocenteComponent } from './create-docente/create-docente.component';
import { UpdateDocenteComponent } from './update-docente/update-docente.component';

const routes: Routes = [
  {path:'',component:ReadDocenteComponent},
  {path:'create',component:CreateDocenteComponent},
  {path:'update:id',component:UpdateDocenteComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocenteRoutingModule { }
