import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent {
formularioLogin: FormGroup;

constructor(){
  let controles: any = {
    correo: new FormControl('',[Validators.email, Validators.required]),
    contrasena: new FormControl('',[Validators.minLength(7), Validators.required]),
    recordarCredenciales: new FormControl(false,[])
  }
  this.formularioLogin = new FormGroup(controles)
}

login(){
  console.log(this.formularioLogin);
}

}
