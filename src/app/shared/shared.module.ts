import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TableComponent } from './components/table/table.component';
import { Select2GenericoComponent } from './components/select2-generico/select2-generico.component';
import { Select2Module } from 'ng-select2-component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    TableComponent,
    Select2GenericoComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    Select2Module
  ],exports:[
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    TableComponent,
    Select2GenericoComponent
  ]
})
export class SharedModule { }
