import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../models/employee';
import { EmployeeService } from '../../../services/employee.service';
import { response } from 'express';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Department } from '../../../models/department';
import { DepartmentService } from '../../../services/department.service';
import { HttpErrorResponse } from '@angular/common/http';
import { error } from 'console';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent implements OnInit{

  id!: number;
  employee!: Employee;
  department!: Department;

  departments: Department[]= [];
  
  constructor(
    private employeeService: EmployeeService,
    private departmentService: DepartmentService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.employee = new Employee(0, '', '', '', 0, '', '',this.department);
    this.getDepartments();

    if (this.id != -1) {
      this.employeeService.findEmployee(this.id).subscribe(
        data => this.employee = data
      );
    }
  }

  public saveEmployee(){

    if(this.id == -1){

      this.employeeService.addEmployee(this.employee).subscribe(
        data => {
          console.log("Employee succesfully created");
          this.router.navigate([""]);
        }
      )
    }else{

      this.employeeService.updateEmployee(this.employee, this.id).subscribe(
        data => {
          console.log("Employee succesfully saved");
          this.router.navigate(["/employees"]);
        }
      )
    }
    
  }

  public getDepartments():void{
    this.departmentService.getDepartments().subscribe(
      data => {
        this.departments = data;
      },

      error => {
        alert("Error retriving departments")
      }
      
    )
  }

}
