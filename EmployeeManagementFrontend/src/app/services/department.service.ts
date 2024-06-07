import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from '../models/department';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private ApiServerUrl="http://localhost:8080/api";

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  public getDepartments(): Observable<Department[]>{
    return this.http.get<Department[]>(`${this.ApiServerUrl}/department/all`, { headers: this.authService.getAuthHeaders() });
  }

  public findDepartment(id: number): Observable<Department>{
    return this.http.get<Department>(`${this.ApiServerUrl}/department/find/${id}`, { headers: this.authService.getAuthHeaders() });
  }

  public addDepartment(Department: Department): Observable<Department>{
    return this.http.post<Department>(`${this.ApiServerUrl}/department/add`, Department, { headers: this.authService.getAuthHeaders() });
  }

  public updateDepartment(Department: Department, id: number): Observable<Department>{
    return this.http.put<Department>(`${this.ApiServerUrl}/department/update/${id}`, Department, { headers: this.authService.getAuthHeaders() });
  }

  public deleteDepartment(id: number): Observable<void>{
    return this.http.delete<void>(`${this.ApiServerUrl}/department/delete/${id}`, { headers: this.authService.getAuthHeaders() });
  }

}

