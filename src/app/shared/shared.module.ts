import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TableComponent } from './components/table/table.component';
import { Select2GenericoComponent } from './components/select2-generico/select2-generico.component';
import { Select2Module } from 'ng-select2-component';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { MatHeaderCell } from '@angular/material/table';
import { MatRow } from '@angular/material/table';
import { MatRowDef } from '@angular/material/table';
import { MatCell } from '@angular/material/table';
import { MatHeaderRow } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatTableDataSource } from '@angular/material/table';
import { MatRippleModule } from '@angular/material/core';
import { MatHeaderCellDef } from '@angular/material/table';
import { MatInput } from '@angular/material/input';
import { MatLabel } from '@angular/material/form-field';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    TableComponent,
    Select2GenericoComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
    Select2Module,
    RouterLinkActive,
    MatPaginator,
    MatPaginatorModule,
    //------------
    /* MatTable,
    MatHeaderCell,
    MatRow,
    MatRowDef,
    MatCell,
    MatHeaderRow, */
    MatHeaderCell,
    MatRow,
    MatRowDef,
    MatCell,
    MatRowDef,
    MatHeaderCellDef,
    MatHeaderRow,
    MatTable,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatInput,
    MatLabel,

  ],exports:[
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    TableComponent,
    Select2GenericoComponent,

  ]
})
export class SharedModule { }
