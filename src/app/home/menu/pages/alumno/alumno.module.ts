import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnoRoutingModule } from './alumno-routing.module';
import { ReadAlumnoComponent } from './read-alumno/read-alumno.component';
import { CreateAlumnoComponent } from './create-alumno/create-alumno.component';
import { UpdateAlumnoComponent } from './update-alumno/update-alumno.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';


@NgModule({
  declarations: [
    ReadAlumnoComponent,
    CreateAlumnoComponent,
    UpdateAlumnoComponent
  ],
  imports: [
    CommonModule,
    AlumnoRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AlumnoModule { }
