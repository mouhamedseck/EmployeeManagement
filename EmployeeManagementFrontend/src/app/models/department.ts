import { Employee } from "./employee";

export class Department{
    
    id: number;
    name: string;
    employees: Employee[] | undefined;
    
    constructor( id: number, name: string, employees: Employee[]){

        this.id = id;
        this.name = name;
        this.employees = employees;
    }
    
    
    
}