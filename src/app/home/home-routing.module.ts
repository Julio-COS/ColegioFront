import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { permissionsGuard } from '../guards/permissions.guard';

import { UsuarioComponent } from './usuario/usuario.component';
import { MenuComponent } from './menu/menu.component';
import { AlumnoComponent } from './menu/pages/alumno/alumno.component';
import { ApoderadoComponent } from './menu/pages/apoderado/apoderado.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AulaComponent } from './menu/pages/aula/aula.component';
import { CursoComponent } from './menu/pages/curso/curso.component';
import { DocenteComponent } from './menu/pages/docente/docente.component';
import { HorarioComponent } from './menu/pages/horario/horario.component';
import { MatriculaComponent } from './menu/pages/matricula/matricula.component';
import { PagosComponent } from './menu/pages/pagos/pagos.component';
import { ReporteDeNotasComponent } from './menu/pages/reporte-de-notas/reporte-de-notas.component';


const routes: Routes = [
  {path:'',component:UsuarioComponent,
    canActivate:[permissionsGuard]
  },
  {path:'menu',component:MenuComponent,
    children:[
      {path:'crudalumno',component:AlumnoComponent},
      {path:'crudapoderado',component:ApoderadoComponent},
      {path:'crudaula',component:AulaComponent},
      {path:'crudcurso',component:CursoComponent},
      {path:'docente',component:DocenteComponent},
      {path:'horario',component:HorarioComponent},
      {path:'matricula',component:MatriculaComponent},
      {path:'pagos',component:PagosComponent},
      {path:'reportedenotas',component:ReporteDeNotasComponent},
    ]
  },
  {path:'**', component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
