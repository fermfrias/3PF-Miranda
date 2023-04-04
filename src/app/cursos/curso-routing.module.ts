import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { AgregarCurComponent } from './components/agregar-cur/agregar-cur.component';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { RouterModule } from '@angular/router';
import { SesionGuard } from '../core/guards/sesion.guard';
import { AdminGuard } from '../core/guards/admin.guard';

const routes: Routes = [
  {path: '', canActivateChild:[SesionGuard], children: [
    {path: 'listar', component: ListaCursosComponent},
    {path: 'editar', component: EditarCursoComponent, canActivate: [AdminGuard] },
    {path: 'agregar', component: AgregarCurComponent, canActivate: [AdminGuard]}
  ]}
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursoRountingModule { }