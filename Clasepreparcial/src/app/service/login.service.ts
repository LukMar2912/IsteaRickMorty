import { Injectable } from '@angular/core';
import { usuario } from '../classes/username';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor() { }

  validarUsuario(usuarioValidar: usuario){
    if(usuarioValidar.user == "admin" && usuarioValidar.pass == "1234"){
      sessionStorage.setItem("sessionPassword", usuarioValidar.user);
      sessionStorage.setItem("sessionUser", usuarioValidar.pass);
      return true;
    }else{
      return false;
    }
  }
}
