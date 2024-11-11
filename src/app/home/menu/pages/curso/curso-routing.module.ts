import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadCursoComponent } from './read-curso/read-curso.component';
import { CreateCursoComponent } from './create-curso/create-curso.component';
import { UpdateCursoComponent } from './update-curso/update-curso.component';

const routes: Routes = [
  {path:'',component:ReadCursoComponent},
  {path:'create',component:CreateCursoComponent},
  {path:'update/:id',component:UpdateCursoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursoRoutingModule { }
