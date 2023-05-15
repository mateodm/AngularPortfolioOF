import { Component, OnInit } from '@angular/core';
import { Login } from "../model/login"
import { NgModel } from '@angular/forms';
import { Auth } from "../service/auth"
import { Token } from "../service/token"
import { Router } from "@angular/router"

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  isLogged =  false;
  isLogFail = false;
  login!: Login;
  name!: string;
  password!: string;
  rol: string[] = [];
  constructor(private auth: Auth, private token: Token, private router: Router)  {

  }
  ngOnInit():void {
    if(this.token.getToken()) {
      this.isLogged = true;
      this.isLogFail = false;
      this.rol = this.token.getAuthorities();
    }
  }
  onLogin(): void{
    this.login = new Login(this.name, this.password); 
    this.auth.login(this.login).subscribe(data =>{
      this.isLogged = true;
      this.isLogFail = false;
      this.token.setToken(data.token);
      this.token.setName(data.name);
      this.token.setAuthorities(data.authorities);
      this.rol = data.authorities;
      this.router.navigate([''])
    }, err => {
      this.isLogged = false;
      this.isLogFail = true;
    })
  }
}