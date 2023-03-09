import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CursosService } from './cursos/services/cursos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';


  constructor(
    private router: Router
  ){}

redirigirInicio(){
this.router.navigate(['inicio', {mensaje: 'existo'}])
}
  
  }
