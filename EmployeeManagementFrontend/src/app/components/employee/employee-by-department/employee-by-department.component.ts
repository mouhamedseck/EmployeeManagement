import { Component } from '@angular/core';
import { Employee } from '../../../models/employee';
import { EmployeeService } from '../../../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-employee-by-department',
  standalone: true,
  imports: [],
  templateUrl: './employee-by-department.component.html',
  styleUrl: './employee-by-department.component.css'
})
export class EmployeeByDepartmentComponent {

  deptId!: number;
  employees: Employee[] = [];

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  
  ){

  }
  ngOnInit(): void {
    this.deptId = this.route.snapshot.params["deptId"];
    this.getEmployees();
    // console.log("ID:" + this.deptId);
    console.log(this.getEmployees());
  }

  public getEmployees():void{
    this.employeeService.findByDepartment(this.deptId).subscribe(
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
