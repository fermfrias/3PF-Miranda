import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SesionService } from 'src/app/core/sesion.service';
import { curso } from 'src/app/models/curso';
import { Sesion } from 'src/app/models/sesion';
import { CursosService } from '../../services/cursos.service';


@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})

export class ListaCursosComponent implements OnInit {
  cursos!: curso[];
  cursos$!: Observable<curso[]>;
  sesion$!: Observable<Sesion>

  constructor(
    private cursoService: CursosService,
    private router: Router,
    private sesion: SesionService
  ) {}

  ngOnInit() {
    this.cursos$ = this.cursoService.obtenerCurso();
    this.sesion$ = this.sesion.ObtenerSesion();
    this.sesion.ObtenerSesion().subscribe((sesion: Sesion) => {
      console.log('Estado de sesion', sesion)
    })
  
  }

  eliminarCurso(curso: curso): void {
    this.cursoService.eliminarCurso(curso).subscribe((curso: curso) => {
      alert(`${curso.nivel}eliminado`);
      this.cursos$ = this.cursoService.obtenerCurso();
    });
  }

  redirigirEditarCurso(curso: curso){
    this.router.navigate(['cursos/editar', curso]);
  }

}
