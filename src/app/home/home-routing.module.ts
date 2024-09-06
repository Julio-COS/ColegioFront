import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { permissionsGuard } from '../guards/permissions.guard';

import { UsuarioComponent } from './usuario/usuario.component';
import { MenuComponent } from './menu/menu.component';
import { AlumnoComponent } from './menu/pages/alumno/alumno.component';
import { ApoderadoComponent } from './menu/pages/apoderado/apoderado.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path:'',component:UsuarioComponent,
    canActivate:[permissionsGuard]
  },
  {path:'menu',component:MenuComponent,
    children:[
      {path:'crudalumno',component:AlumnoComponent},
      {path:'crudapoderado',component:ApoderadoComponent},
    ]
  },
  {path:'**', component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
