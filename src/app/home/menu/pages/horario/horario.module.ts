import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HorarioRoutingModule } from './horario-routing.module';
import { ReadHorarioComponent } from './read-horario/read-horario.component';
import { CreateHorarioComponent } from './create-horario/create-horario.component';
import { UpdateHorarioComponent } from './update-horario/update-horario.component';
import { SharedModule } from '../../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Select2Module } from 'ng-select2-component';


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
    Select2Module
  ]
})
export class HorarioModule { }
