import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { usuario } from 'src/app/classes/username';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registroForm = new FormGroup({
    user : new FormControl(''),
    pass: new FormControl('')
  });
  
  constructor(private router:Router,
              private loginService:LoginService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    var usuario = this.registroForm.value as usuario;
    
    if(this.loginService.validarUsuario(usuario)){
      console.log(usuario);
      this.router.navigateByUrl("/home");
    }else{
      alert("Usuario y contraseña invalidos");
    }
  }

}
