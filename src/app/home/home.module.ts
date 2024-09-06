import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from "../shared/shared.module";
import { UsuarioComponent } from './usuario/usuario.component';
import { MenuComponent } from './menu/menu.component';
import { PagesComponent } from './menu/pages/pages.component';
import { AlumnoComponent } from './menu/pages/alumno/alumno.component';
import { ApoderadoComponent } from './menu/pages/apoderado/apoderado.component';
import { MatriculaComponent } from './menu/pages/matricula/matricula.component';
import { ReporteDeNotasComponent } from './menu/pages/reporte-de-notas/reporte-de-notas.component';
import { PagosComponent } from './menu/pages/pagos/pagos.component';
import { AulaComponent } from './menu/pages/aula/aula.component';
import { HorarioComponent } from './menu/pages/horario/horario.component';
import { CursoComponent } from './menu/pages/curso/curso.component';
import { DocenteComponent } from './menu/pages/docente/docente.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    UsuarioComponent,
    MenuComponent,
    PagesComponent,
    AlumnoComponent,
    ApoderadoComponent,
    MatriculaComponent,
    ReporteDeNotasComponent,
    PagosComponent,
    AulaComponent,
    HorarioComponent,
    CursoComponent,
    DocenteComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
]
})
export class HomeModule { }
