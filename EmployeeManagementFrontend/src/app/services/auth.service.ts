import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserEntity } from '../models/userEntity';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiServerUrl = "http://localhost:8080/api/auth";

  constructor(private http: HttpClient) { }

  public register(userEntity: UserEntity): Observable<UserEntity> {
    return this.http.post<UserEntity>(`${this.apiServerUrl}/register`, userEntity);
  }

  public login(userEntity: UserEntity): Observable<UserEntity> {
    let basicAuthHeader = 'Basic ' + window.btoa(userEntity.username + ':' + userEntity.password);
    
    let headers = new HttpHeaders({
      Authorization: basicAuthHeader
    });
    return this.http.post<UserEntity>(`${this.apiServerUrl}/login`, userEntity, { headers }).pipe(
      tap(() => {
        localStorage.setItem('username', userEntity.username);
        localStorage.setItem('password', userEntity.password);
      })
    );
  }

  public logout(): Observable<any> {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    return this.http.post(`${this.apiServerUrl}/logout`, {});
  }

  public getAuthHeaders(): HttpHeaders {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    if (username && password) {
      return new HttpHeaders({
        Authorization: 'Basic ' + btoa(username + ':' + password)
      });
    }
    return new HttpHeaders();
  }

  public isAuthenticated(): boolean {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    if(username && password)
      return true
    return false
  }


}

