import { Component, OnInit } from '@angular/core';
import { UserEntity } from '../../models/userEntity';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  // username!: String;
  // password!: String;
  userEntity: UserEntity = new UserEntity(0,"","");

constructor(private authService: AuthService, private router: Router){}

  ngOnInit(): void {


  }


  public register(){

    this.authService.register(this.userEntity).subscribe(
      data => {
        console.log("Employee successfully created");
        this.router.navigate(["login"]);
      },
      error => {
        console.error("Error during registration", error);
      }
    )
  }

}
