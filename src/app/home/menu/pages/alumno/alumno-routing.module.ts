import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadAlumnoComponent } from './read-alumno/read-alumno.component';
import { CreateAlumnoComponent } from './create-alumno/create-alumno.component';
import { UpdateAlumnoComponent } from './update-alumno/update-alumno.component';

const routes: Routes = [
  {path:'',component:ReadAlumnoComponent},
  {path:'create',component:CreateAlumnoComponent},
  {path:'update:id',component:UpdateAlumnoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnoRoutingModule { }
