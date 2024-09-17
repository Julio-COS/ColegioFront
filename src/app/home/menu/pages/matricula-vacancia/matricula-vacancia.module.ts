import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatriculaVacanciaRoutingModule } from './matricula-vacancia-routing.module';
import { CreateMVacanciaComponent } from './create-mvacancia/create-mvacancia.component';
import { UpdateMVacanciaComponent } from './update-mvacancia/update-mvacancia.component';
import { ReadMVacanciaComponent } from './read-mvacancia/read-mvacancia.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';
import { Select2Module } from 'ng-select2-component';


@NgModule({
  declarations: [
    CreateMVacanciaComponent,
    UpdateMVacanciaComponent,
    ReadMVacanciaComponent
  ],
  imports: [
    CommonModule,
    MatriculaVacanciaRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    Select2Module
  ]
})
export class MatriculaVacanciaModule { }
