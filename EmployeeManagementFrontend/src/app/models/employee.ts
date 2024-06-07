import { Department } from "./department";

export class Employee{
    
    id : number;
    name : string;
    email : string;
    jobTitle : string;
    phone : number;
    imageUrl : string;
    employeeCode : string;
    department : Department;
    
    constructor(id: number, name: string, email: string, jobTitle: string, phone: number,
    imageUrl: string, employeeCode: string, department: Department ){

        this.id = id;
        this.name = name;
        this.email = email;
        this.jobTitle = jobTitle;
        this.phone = phone;
        this.imageUrl = imageUrl;
        this.employeeCode = employeeCode;
        this.department = department;

    }
    
    
    
}