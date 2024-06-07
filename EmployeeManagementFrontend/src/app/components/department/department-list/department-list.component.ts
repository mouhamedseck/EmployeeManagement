import { Component } from '@angular/core';
import { Department } from '../../../models/department';
import { DepartmentService } from '../../../services/department.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-department-list',
  standalone: true,
  imports: [],
  templateUrl: './department-list.component.html',
  styleUrl: './department-list.component.css'
})
export class DepartmentListComponent {

  departments: Department[] = [];

  constructor(
    private departmentService: DepartmentService,
    private router: Router
  
  ){

  }
  ngOnInit(): void {
    this.getDepartments();
    console.log(this.getDepartments());
  }

  public getDepartments():void{
    this.departmentService.getDepartments().subscribe(
      (response: Department[])=>{
        this.departments = response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message)
      }
    )
  }

  public getEmployees(deptId: number){
    this.router.navigate(["employeeDepartment", deptId ]);
  }

  public deleteDepartment(id: number):void{
    this.departmentService.deleteDepartment(id).subscribe(
      response => {
        console.log(" Department of id: "+ id + "succesfully deleted");
        this.getDepartments();
      }
    )
  }


  public updateDepartment(id: number){
    this.router.navigate(["departmentForm", id]);
  }

  public addDepartment(){
    this.router.navigate(["departmentForm", -1]);
  }
}
