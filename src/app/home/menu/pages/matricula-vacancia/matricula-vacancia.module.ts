import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatriculaVacanciaRoutingModule } from './matricula-vacancia-routing.module';
import { CreateMVacanciaComponent } from './create-mvacancia/create-mvacancia.component';
import { UpdateMVacanciaComponent } from './update-mvacancia/update-mvacancia.component';
import { ReadMVacanciaComponent } from './read-mvacancia/read-mvacancia.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';



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
  ]
})
export class MatriculaVacanciaModule { }
