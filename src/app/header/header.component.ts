import { Token } from '../service/token';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  isLogged = false
  constructor(private router: Router, private token: Token) {
  }
  ngOnInit(): void { if (this.token.getToken()) { this.isLogged = true; } else { this.isLogged = false} 
}
onLogOut():void {
  this.token.closeSession();
  window.location.reload()
}
  signin() {
    this.router.navigate(["/sign-in"])
  }
}