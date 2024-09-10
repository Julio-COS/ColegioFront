import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocenteRoutingModule } from './docente-routing.module';
import { ReadDocenteComponent } from './read-docente/read-docente.component';
import { CreateDocenteComponent } from './create-docente/create-docente.component';
import { UpdateDocenteComponent } from './update-docente/update-docente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "../../../../shared/shared.module";


@NgModule({
  declarations: [
    ReadDocenteComponent,
    CreateDocenteComponent,
    UpdateDocenteComponent
  ],
  imports: [
    CommonModule,
    DocenteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
]
})
export class DocenteModule { }
