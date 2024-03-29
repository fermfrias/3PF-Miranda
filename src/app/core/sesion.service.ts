import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Sesion } from '../models/sesion';

@Injectable({
  providedIn: 'root'
})
export class SesionService {
  sesion$: BehaviorSubject<Sesion> 
  constructor() { 
    let sesion: Sesion = {
      sesionActiva: false
    };
    
    this.sesion$ = new BehaviorSubject<Sesion>(sesion);
  }

  crearSesion(sesion: Sesion){
    this.sesion$.next(sesion);
  }

  ObtenerSesion(): Observable<Sesion>{
    return this.sesion$.asObservable();
  }

  logout(sesion: Sesion){
    this.sesion$.next(sesion);
  }
}
