import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SesionService } from './core/sesion.service';
import { CursosService } from './cursos/services/cursos.service';
import { Sesion } from './models/sesion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo';
  sesion$!: Observable<Sesion>;


  constructor(
    private router: Router,
    private sesion: SesionService
  ) { }

  ngOnInit(): void {
    this.sesion$ = this.sesion.ObtenerSesion();
  }

  redirigirInicio() {
    this.router.navigate(['inicio'])
  }

  logout() {
    let sesionLogout: Sesion = {
      sesionActiva: false
    }
    this.sesion.logout(sesionLogout);
    this.router.navigate(['auth/login']);
  }

}
