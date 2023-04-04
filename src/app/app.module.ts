import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioReactivoComponent } from './core/core/formulario-reactivo/formulario-reactivo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CursosModule } from './cursos/cursos.module';
import { NotFoundComponent } from './core/core/not-found/not-found.component';
import { ListaCursosComponent } from './cursos/components/lista-cursos/lista-cursos.component';
import { InicioComponent } from './core/core/inicio/inicio.component';
import { MaterialModule } from './material.module';
import { CoreModule } from './core/core.module';
import { AppRountingModule } from './app-rounting.module';
import { AutenticacionModule } from './autenticacion/autenticacion.module';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    InicioComponent,
    FormularioReactivoComponent,
  ],

  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,
    AppRountingModule,
    AutenticacionModule
    ],

    exports:[
      ReactiveFormsModule,
      MaterialModule
    ],
    

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
