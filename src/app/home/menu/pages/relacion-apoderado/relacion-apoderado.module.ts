import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelacionApoderadoRoutingModule } from './relacion-apoderado-routing.module';
import { UpdateRelacionApoderadoComponent } from './update-relacion-apoderado/update-relacion-apoderado.component';
import { CreateRelacionApoderadoComponent } from './create-relacion-apoderado/create-relacion-apoderado.component';
import { ReadRelacionApoderadoComponent } from './read-relacion-apoderado/read-relacion-apoderado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';



@NgModule({
  declarations: [
    UpdateRelacionApoderadoComponent,
    CreateRelacionApoderadoComponent,
    ReadRelacionApoderadoComponent
  ],
  imports: [
    CommonModule,
    RelacionApoderadoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class RelacionApoderadoModule { }
