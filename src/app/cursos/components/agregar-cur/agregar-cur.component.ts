import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, ObservableInput } from 'rxjs';
import { ProfesorService } from 'src/app/core/services/profesor.service';
import { curso } from 'src/app/models/curso';
import { Profesor } from 'src/app/models/profesor';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-agregar-cur',
  templateUrl: './agregar-cur.component.html',
  styleUrls: ['./agregar-cur.component.css']
})
export class AgregarCurComponent  implements OnInit{
  formulario!: FormGroup;
  profesores$!: Observable<Profesor[]> 

  constructor(
    private router: Router,
    private cursoService: CursosService,
    private profesores: ProfesorService
  ){}

  ngOnInit(): void {
    this.profesores$ = this.profesores.obtenerProfesores();
    this.formulario = new FormGroup ({
      nivel: new FormControl(''),
      comision: new FormControl(''),
      profesor: new FormControl({})
    })
  }

agregarCurso(){
  let curso: curso = {
    id:'',
    nivel: this.formulario.value.nivel,
    comision: this.formulario.value.comision,
    profesor: this.formulario.value.profesor
    }
  this.cursoService.agregarCurso(curso).subscribe((curso: curso) => {
    alert(`$(curso.nombre) agregado satisfactoriamente`)
    this.router.navigate(['cursos/listar']);
  });
  //this.router.navigate(['cursos/listar']);
}
}
