import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  formulario!: FormGroup;
  constructor(
    private loginService: LoginService
  ){}

  ngOnInit(): void {
    this.formulario= new FormGroup({
      usuario: new FormControl(),
      contraseña: new FormControl(),
      admin: new FormControl(false),
    });
    
  }
  login(){
    let usuario: Usuario = {
      usuario: this.formulario.value.usuario,
      contrasena: this.formulario.value.contrasena,
      admin: this.formulario.value.admin,
    }
    this.loginService.login(usuario);
  }
}
