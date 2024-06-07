import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { NavbarComponent } from "../menu/navbar/navbar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, HttpClientModule,]
    
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

}
