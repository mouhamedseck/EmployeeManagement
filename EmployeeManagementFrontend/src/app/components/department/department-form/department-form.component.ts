import { Component } from '@angular/core';
import { Department } from '../../../models/department';
import { DepartmentService } from '../../../services/department.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../../models/employee';

@Component({
  selector: 'app-department-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './department-form.component.html',
  styleUrl: './department-form.component.css'
})
export class DepartmentFormComponent {

  id!: number;
  department!: Department;
  employees: Employee[] = [];
  
  constructor(
    private departmentService: DepartmentService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.department = new Department(0, '', this.employees );

    if (this.id !=1) {
      this.departmentService.findDepartment(this.id).subscribe(
        data => this.department = data
      );
    }
  }

  public saveDepartment(){

    this.id = this.route.snapshot.params["id"];

    if(this.id == -1){

      this.departmentService.addDepartment(this.department).subscribe(
        data => {
          console.log("Department succesfully created");
          this.router.navigate(["/departments"]);
        }
      )
    }else{

      this.departmentService.updateDepartment(this.department, this.id).subscribe(
        data => {
          console.log("Department succesfully saved");
          this.router.navigate([""]);
        }
      )
    }
    
  }
}
