import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { permissionsGuard } from '../guards/permissions.guard';

import { UsuarioComponent } from './usuario/usuario.component';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',component:UsuarioComponent,
    canActivate:[permissionsGuard]
  },
  {path:'menu',component:MenuComponent,
    children:[
      {path:'crudalumno',loadChildren: () => import('./menu/pages/alumno/alumno.module').then(m=>m.AlumnoModule)},
      {path:'crudapoderado',loadChildren: () => import('./menu/pages/apoderado/apoderado.module').then(m=>m.ApoderadoModule)},
      {path:'crudaula',loadChildren: () => import('./menu/pages/aula/aula.module').then(m=>m.AulaModule)},
      {path:'crudcurso',loadChildren: () => import('./menu/pages/curso/curso.module').then(m=>m.CursoModule)},
      {path:'docente',loadChildren: () => import('./menu/pages/docente/docente.module').then(m=>m.DocenteModule)},
      {path:'horario',loadChildren: () => import('./menu/pages/horario/horario.module').then(m=>m.HorarioModule)},
      {path:'matricula',loadChildren: () => import('./menu/pages/matricula/matricula.module').then(m=>m.MatriculaModule)},
      {path:'pagos',loadChildren: () => import('./menu/pages/pagos/pagos.module').then(m=>m.PagosModule)},
      {path:'reportedenotas',loadChildren: () => import('./menu/pages/reporte-de-notas/reporte-de-notas.module').then(m=>m.ReporteDeNotasModule)},
    ]
  },
  {path:'**', component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
