import { Component } from '@angular/core';
import { UserEntity } from '../../models/userEntity';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userEntity: UserEntity = new UserEntity(0, "", "");
  message: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  public login() {
    this.authService.login(this.userEntity).subscribe(
      data => {
        console.log(data)
        this.router.navigate([""]);
      },
      
      error => {
        
        if (error.status === 401) {
          this.message = 'Invalid credentials';
        } else if (error.status === 404) {
          this.message = 'User not found';
        } else {
          this.message = 'An unexpected error occurred';
        }
      }
    );
  }
}

