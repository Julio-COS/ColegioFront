import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AulaRoutingModule } from './aula-routing.module';
import { ReadAulaComponent } from './read-aula/read-aula.component';
import { CreateAulaComponent } from './create-aula/create-aula.component';
import { SharedModule } from "../../../../shared/shared.module";
import { UpdateAulaComponent } from './update-aula/update-aula.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ReadAulaComponent,
    CreateAulaComponent,
    UpdateAulaComponent
  ],
  imports: [
    CommonModule,
    AulaRoutingModule,
    SharedModule,
    FormsModule, 
    ReactiveFormsModule
],exports:[
    ReadAulaComponent,
    CreateAulaComponent
  ]
})
export class AulaModule { }
