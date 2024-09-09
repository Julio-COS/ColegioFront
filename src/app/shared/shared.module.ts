import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TableComponent } from './components/table/table.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ],exports:[
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    TableComponent
  ]
})
export class SharedModule { }
