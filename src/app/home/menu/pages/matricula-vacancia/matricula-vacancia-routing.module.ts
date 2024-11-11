import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadMVacanciaComponent } from './read-mvacancia/read-mvacancia.component';
import { CreateMVacanciaComponent } from './create-mvacancia/create-mvacancia.component';
import { UpdateMVacanciaComponent } from './update-mvacancia/update-mvacancia.component';

const routes: Routes = [
  {path:'',component:ReadMVacanciaComponent},
  {path:'create',component:CreateMVacanciaComponent},
  {path:'update/:id',component:UpdateMVacanciaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatriculaVacanciaRoutingModule { }
