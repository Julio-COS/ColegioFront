import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatriculaVacanciaRoutingModule } from './matricula-vacancia-routing.module';
import { CreateMVacanciaComponent } from './create-mvacancia/create-mvacancia.component';
import { UpdateMVacanciaComponent } from './update-mvacancia/update-mvacancia.component';
import { ReadMVacanciaComponent } from './read-mvacancia/read-mvacancia.component';


@NgModule({
  declarations: [
    CreateMVacanciaComponent,
    UpdateMVacanciaComponent,
    ReadMVacanciaComponent
  ],
  imports: [
    CommonModule,
    MatriculaVacanciaRoutingModule
  ]
})
export class MatriculaVacanciaModule { }
