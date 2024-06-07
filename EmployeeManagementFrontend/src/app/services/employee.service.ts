import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private ApiServerUrl="http://localhost:8080/api";

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }
  

  public getEmployees(): Observable<Employee[]>{
    const headers = this.authService.getAuthHeaders();
    return this.http.get<Employee[]>(`${this.ApiServerUrl}/employee/all`, { headers });
  }

  public findEmployee(id: number): Observable<Employee>{
    return this.http.get<Employee>(`${this.ApiServerUrl}/employee/find/${id}`, { headers: this.authService.getAuthHeaders() });
  }
  
  public findByDepartment(id: number): Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.ApiServerUrl}/employee/find/department/${id}`, { headers: this.authService.getAuthHeaders() });
  }

  public addEmployee(employee: Employee): Observable<Employee>{
    return this.http.post<Employee>(`${this.ApiServerUrl}/employee/add`, employee, { headers: this.authService.getAuthHeaders() });
  }

  public updateEmployee(employee: Employee, id: number): Observable<Employee>{
    return this.http.put<Employee>(`${this.ApiServerUrl}/employee/update/${id}`, employee, { headers: this.authService.getAuthHeaders() });
  }

  public deleteEmployee(id: number): Observable<void>{
    return this.http.delete<void>(`${this.ApiServerUrl}/employee/delete/${id}`, { headers: this.authService.getAuthHeaders() });
  }
}
