import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarCurComponent } from './components/agregar-cur/agregar-cur.component';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component';
import { MaterialModule } from '../material.module';
import { DetalleCursoComponent } from './components/detalle-curso/detalle-curso.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { MatTableModule } from '@angular/material/table';
import { TablaCursoComponent } from './components/tabla-curso/tabla-curso.component';
import { CursoRountingModule } from './curso-routing.module';
import { AppRountingModule } from '../app-rounting.module';
import { CursosService } from './services/cursos.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AgregarCurComponent,
    EditarCursoComponent,
    DetalleCursoComponent,
    ListaCursosComponent,
    TablaCursoComponent    
  ],

  imports: [
    CommonModule,
    MaterialModule,
    MatToolbarModule,
    MatTableModule,
    CursoRountingModule,
    AppRountingModule,
    ReactiveFormsModule
  ],
  exports:[
    AgregarCurComponent,
    EditarCursoComponent,
    DetalleCursoComponent,
    ListaCursosComponent,
    TablaCursoComponent, 
    CommonModule,
    MaterialModule,
    MatToolbarModule,
    MatTableModule,
    CursoRountingModule
  ],

  providers: [ 
    CursosService
  ]
})

export class CursosModule { }
