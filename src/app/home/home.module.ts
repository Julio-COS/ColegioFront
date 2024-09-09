import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from "../shared/shared.module";
import { UsuarioComponent } from './usuario/usuario.component';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UsuarioComponent,
    MenuComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ]
})
export class HomeModule { }
