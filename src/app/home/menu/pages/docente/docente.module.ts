import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocenteRoutingModule } from './docente-routing.module';
import { ReadDocenteComponent } from './read-docente/read-docente.component';
import { CreateDocenteComponent } from './create-docente/create-docente.component';
import { UpdateDocenteComponent } from './update-docente/update-docente.component';


@NgModule({
  declarations: [
    ReadDocenteComponent,
    CreateDocenteComponent,
    UpdateDocenteComponent
  ],
  imports: [
    CommonModule,
    DocenteRoutingModule
  ]
})
export class DocenteModule { }
