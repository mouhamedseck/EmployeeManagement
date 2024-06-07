import { Routes } from '@angular/router';
import { EmployeeFormComponent } from './components/employee/employee-form/employee-form.component';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component';
import { DepartmentFormComponent } from './components/department/department-form/department-form.component';
import { DepartmentListComponent } from './components/department/department-list/department-list.component';
import { EmployeeByDepartmentComponent } from './components/employee/employee-by-department/employee-by-department.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './services/auth.guard';

export const routes: Routes = [

    { path: '', component: EmployeeListComponent, canActivate: [AuthGuard] },
    { path: "employees", component: EmployeeListComponent, canActivate: [AuthGuard]},
    { path: "employeeForm", component: EmployeeFormComponent, canActivate: [AuthGuard] },
    { path: "employeeForm/:id", component: EmployeeFormComponent, canActivate: [AuthGuard] },
    { path: "departments", component: DepartmentListComponent, canActivate: [AuthGuard]},
    { path: "departmentForm", component: DepartmentFormComponent, canActivate: [AuthGuard] },
    { path: "departmentForm/:id", component: DepartmentFormComponent, canActivate: [AuthGuard] },
    { path: "employeeDepartment/:deptId", component: EmployeeByDepartmentComponent, canActivate: [AuthGuard] },
    { path: "login", component: LoginComponent},
    { path: "register", component: RegisterComponent}

];
