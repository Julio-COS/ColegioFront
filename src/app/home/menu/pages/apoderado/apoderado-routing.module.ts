import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadApoderadoComponent } from './read-apoderado/read-apoderado.component';
import { CreateApoderadoComponent } from './create-apoderado/create-apoderado.component';
import { UpdateApoderadoComponent } from './update-apoderado/update-apoderado.component';

const routes: Routes = [
  {path:'',component:ReadApoderadoComponent},
  {path:'create',component:CreateApoderadoComponent},
  {path:'update/:id',component:UpdateApoderadoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApoderadoRoutingModule { }
