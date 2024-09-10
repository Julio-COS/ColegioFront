import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadMatriculaComponent } from './read-matricula/read-matricula.component';
import { CreateMatriculaComponent } from './create-matricula/create-matricula.component';
import { UpdateMatriculaComponent } from './update-matricula/update-matricula.component';

const routes: Routes = [
  {path:'',component:ReadMatriculaComponent},
  {path:'create',component:CreateMatriculaComponent},
  {path:'update:id',component:UpdateMatriculaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatriculaRoutingModule { }
