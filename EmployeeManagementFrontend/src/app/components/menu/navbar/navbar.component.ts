import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(
    private autHService: AuthService,
    private router: Router
  ){}
  public logout(){
    this.autHService.logout();
    this.router.navigate(["login"]);
  }
  public isLoggedIn():Boolean{
    return this.autHService.isAuthenticated()
  }

  public isLoggedOut():Boolean{
    if (this.isLoggedIn() == false){
      return true
    }
    return false
  }
}
