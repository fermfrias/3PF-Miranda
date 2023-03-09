import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { curso } from 'src/app/models/curso';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-tabla-curso',
  templateUrl: './tabla-curso.component.html',
  styleUrls: ['./tabla-curso.component.css']
})
export class TablaCursoComponent {
  dataSource!: MatTableDataSource <curso>;
  columnas: string[] = ['nivel', 'comision', 'profesor', 'inscribir' ]

  constructor(
    private cursosService: CursosService
   ){
   
   }
   ngOnInit(): void {
    console.log("Primero DataSource")
    this.dataSource = new MatTableDataSource <curso> ();
    this.cursosService.obtenerCurso().subscribe((cursos: curso[]) => {
      console.log("Segundo DataSource")
      this.dataSource.data = cursos;
    });
    console.log("Tercero DataSource");
  }
  ngOnDestroy(){
    this.cursosService
  }
}
