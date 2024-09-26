import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadRelacionApoderadoComponent } from './read-relacion-apoderado/read-relacion-apoderado.component';
import { CreateRelacionApoderadoComponent } from './create-relacion-apoderado/create-relacion-apoderado.component';
import { UpdateRelacionApoderadoComponent } from './update-relacion-apoderado/update-relacion-apoderado.component';

const routes: Routes = [
  {path:'',component:ReadRelacionApoderadoComponent},
  {path:'create',component:CreateRelacionApoderadoComponent},
  {path:'update/:id',component:UpdateRelacionApoderadoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelacionApoderadoRoutingModule { }
