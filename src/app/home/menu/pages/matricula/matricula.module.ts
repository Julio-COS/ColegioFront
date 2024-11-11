import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatriculaRoutingModule } from './matricula-routing.module';
import { ReadMatriculaComponent } from './read-matricula/read-matricula.component';
import { CreateMatriculaComponent } from './create-matricula/create-matricula.component';
import { UpdateMatriculaComponent } from './update-matricula/update-matricula.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    ReadMatriculaComponent,
    CreateMatriculaComponent,
    UpdateMatriculaComponent,
  ],
  imports: [
    CommonModule,
    MatriculaRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class MatriculaModule { }
