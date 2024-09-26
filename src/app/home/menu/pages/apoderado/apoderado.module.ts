import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApoderadoRoutingModule } from './apoderado-routing.module';
import { CreateApoderadoComponent } from './create-apoderado/create-apoderado.component';
import { ReadApoderadoComponent } from './read-apoderado/read-apoderado.component';
import { UpdateApoderadoComponent } from './update-apoderado/update-apoderado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';


@NgModule({
  declarations: [
    CreateApoderadoComponent,
    ReadApoderadoComponent,
    UpdateApoderadoComponent
  ],
  imports: [
    CommonModule,
    ApoderadoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ApoderadoModule { }
