import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HorarioRoutingModule } from './horario-routing.module';
import { ReadHorarioComponent } from './read-horario/read-horario.component';
import { CreateHorarioComponent } from './create-horario/create-horario.component';
import { UpdateHorarioComponent } from './update-horario/update-horario.component';
import { SharedModule } from '../../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ReadHorarioComponent,
    CreateHorarioComponent,
    UpdateHorarioComponent
  ],
  imports: [
    CommonModule,
    HorarioRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class HorarioModule { }
