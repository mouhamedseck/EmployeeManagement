package com.mseck.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mseck.dto.EmployeeDTO;
import com.mseck.model.Department;
import com.mseck.model.Employee;
import com.mseck.service.EmployeeService;

@RestController
@RequestMapping("/api/employee")
@CrossOrigin("http://localhost:4200")
public class EmployeeController {
	
	
	@Autowired
	private EmployeeService employeeService;
	
	@PostMapping("/add")
	public ResponseEntity<Employee> addEmployee(@RequestBody Employee employee) {
		Employee newEmployee = employeeService.addEmployee(employee);
		return new ResponseEntity<>(newEmployee, HttpStatus.CREATED);
	}
	
	@GetMapping("/all")
	public ResponseEntity<List<EmployeeDTO>> findAllEmployee() {
		List<EmployeeDTO> employees = employeeService.findAllEmployees();
		return new ResponseEntity<>(employees, HttpStatus.OK);
	}

	@GetMapping("/find/{id}")
	public ResponseEntity<EmployeeDTO> findEmployeeById(@PathVariable Long id) {
		EmployeeDTO employee =  employeeService.findEmployeeById(id);
		return new ResponseEntity<>(employee, HttpStatus.OK);
	}
	
	@GetMapping("/find/department/{departmentId}")
	public ResponseEntity<List<EmployeeDTO>> findByDepartment(@PathVariable Long departmentId){
		List<EmployeeDTO> employees = employeeService.findByDepartment(departmentId);
		return new ResponseEntity<>(employees, HttpStatus.OK);
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<Employee> updateEmployee(@RequestBody Employee employee, @PathVariable Long id){
		Employee selectedEmployee = employeeService.findEmployeeByIdForUpdate(id);
		selectedEmployee.setName(employee.getName());
		selectedEmployee.setEmail(employee.getEmail());
		selectedEmployee.setJobTitle(employee.getJobTitle());
		selectedEmployee.setImageUrl(employee.getImageUrl());
		selectedEmployee.setPhone(employee.getPhone());
		Employee updateEmployee = employeeService.updateEmployee(employee);
		return new ResponseEntity<>(updateEmployee, HttpStatus.OK);
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteEmployee(@PathVariable("id") Long id) {
		employeeService.deleteEmployee(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
}
