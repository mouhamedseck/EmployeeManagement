import { Component } from '@angular/core';
import { Employee } from '../../../models/employee';
import { HttpErrorResponse } from '@angular/common/http';
import { EmployeeService } from '../../../services/employee.service';
import { response } from 'express';
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {

  employees: Employee[] = [];

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  
  ){

  }
  ngOnInit(): void {
    this.getEmployees();
    console.log(this.getEmployees());
  }

  public getEmployees():void{
    this.employeeService.getEmployees().subscribe(
      (response: Employee[])=>{
        this.employees = response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message)
      }
    )
  }

  public deleteEmployee(id: number):void{
    this.employeeService.deleteEmployee(id).subscribe(
      response => {
        console.log(" Employee of id: "+ id + "succesfully deleted");
        this.getEmployees();
      }
    )
  }


  public updateEmployee(id: number){
    this.router.navigate(["employeeForm", id]);
  }

  public addEmployee(){
    this.router.navigate(["employeeForm", -1]);
  }


}
