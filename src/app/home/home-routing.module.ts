import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { permissionsGuard } from '../guards/permissions.guard';

import { UsuarioComponent } from './usuario/usuario.component';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',component:UsuarioComponent},
  {path:'menu',component:MenuComponent,
    children:[
      {path:'alumno',loadChildren: () => import('./menu/pages/alumno/alumno.module').then(m=>m.AlumnoModule)},
      {path:'apoderado',loadChildren: () => import('./menu/pages/apoderado/apoderado.module').then(m=>m.ApoderadoModule)},
      {path:'relacion-apoderado',loadChildren: () => import('./menu/pages/relacion-apoderado/relacion-apoderado.module').then(m=>m.RelacionApoderadoModule)},
      {path:'aula',loadChildren: () => import('./menu/pages/aula/aula.module').then(m=>m.AulaModule)},
      {path:'curso',loadChildren: () => import('./menu/pages/curso/curso.module').then(m=>m.CursoModule)},
      {path:'docente',loadChildren: () => import('./menu/pages/docente/docente.module').then(m=>m.DocenteModule)},
      {path:'horario',loadChildren: () => import('./menu/pages/horario/horario.module').then(m=>m.HorarioModule)},
      {path:'matricula',loadChildren: () => import('./menu/pages/matricula/matricula.module').then(m=>m.MatriculaModule)},
      {path:'matricula-vacancia',loadChildren: () => import('./menu/pages/matricula-vacancia/matricula-vacancia.module').then(m=>m.MatriculaVacanciaModule)},
      {path:'pagos',loadChildren: () => import('./menu/pages/pagos/pagos.module').then(m=>m.PagosModule)},
      {path:'reportedenotas',loadChildren: () => import('./menu/pages/reporte-de-notas/reporte-de-notas.module').then(m=>m.ReporteDeNotasModule)},
    ],canActivate:[permissionsGuard]
  },
  {path:'**', component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
