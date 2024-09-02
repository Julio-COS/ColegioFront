import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MainComponent } from './main/main.component';
import { SharedModule } from "../shared/shared.module";
import { UsuarioComponent } from './usuario/usuario.component';


@NgModule({
  declarations: [
    MainComponent,
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
]
})
export class HomeModule { }
