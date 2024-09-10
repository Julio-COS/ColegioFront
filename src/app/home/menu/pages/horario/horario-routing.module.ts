import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateHorarioComponent } from './update-horario/update-horario.component';
import { CreateHorarioComponent } from './create-horario/create-horario.component';
import { ReadHorarioComponent } from './read-horario/read-horario.component';

const routes: Routes = [
  {path:'',component:ReadHorarioComponent},
  {path:'create',component:CreateHorarioComponent},
  {path:'update:id',component:UpdateHorarioComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HorarioRoutingModule { }
