import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private authService: AuthService
    ){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    
    if (username && password) {

      const authHeader = 'Basic ' + btoa(username + ':' + password);

      const authReq = req.clone({
        headers: req.headers.set('Authorization', authHeader)
      });
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }
}
