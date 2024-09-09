import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoRoutingModule } from './curso-routing.module';
import { UpdateCursoComponent } from './update-curso/update-curso.component';
import { CreateCursoComponent } from './create-curso/create-curso.component';
import { ReadCursoComponent } from './read-curso/read-curso.component';
import { SharedModule } from "../../../../shared/shared.module";


@NgModule({
  declarations: [
    UpdateCursoComponent,
    CreateCursoComponent,
    ReadCursoComponent
  ],
  imports: [
    CommonModule,
    CursoRoutingModule,
    SharedModule
]
})
export class CursoModule { }
