import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './core/core/inicio/inicio.component';
import { NotFoundComponent } from './core/core/not-found/not-found.component';
import { SesionGuard } from './core/guards/sesion.guard';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent, canActivate: [SesionGuard]},
  {
    path:'cursos',
    loadChildren: () => import('./cursos/cursos.module').then((modulo)=> modulo.CursosModule),
    canLoad: [SesionGuard]
  },
  {
    path:'auth',
    loadChildren: () => import('./autenticacion/autenticacion.module').then((modulo)=> modulo.AutenticacionModule)
  },
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRountingModule { }
