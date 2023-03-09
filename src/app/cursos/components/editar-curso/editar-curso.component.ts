import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})
export class EditarCursoComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros) => {
      this.formulario= new FormGroup({
        nivel: new FormControl(parametros.get('nivel')),
        comision: new FormControl(parametros.get('comision')),
        profesor: new FormControl(parametros.get('profesor'))
    })
  })
}

  editarCurso(){

  }
}
