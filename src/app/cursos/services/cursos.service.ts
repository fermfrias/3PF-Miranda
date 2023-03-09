import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { curso } from 'src/app/models/curso';
import { env } from 'src/environment/environment'

@Injectable()
export class CursosService {

  constructor(
    private http: HttpClient
  ) {
    
  }

  obtenerCurso(): Observable<curso[]>{
   return this.http.get<curso[]>(`${env.apiUrl}/Cursos`)
  }

  agregarCurso(curso: curso): Observable<curso>{
    return this.http.post<curso>(`${env.apiUrl}/cursos`,curso)
  }

  editarCurso(curso: curso): void{
  
  }


  eliminarCurso(curso: curso): Observable<curso> {
    return this.http.delete<curso>(`${env.apiUrl}/Cursos/${curso.id}`)
  }
}
