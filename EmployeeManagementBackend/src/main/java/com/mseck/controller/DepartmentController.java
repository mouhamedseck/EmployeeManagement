package com.mseck.controller;

import java.util.List;

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
import com.mseck.model.Department;
import com.mseck.service.DepartmentService;

@RestController
@RequestMapping("/api/department")
@CrossOrigin("http://localhost:4200")
public class DepartmentController {

	@Autowired
	private DepartmentService departmentService;
	
	@PostMapping("/add")
	public ResponseEntity<Department> addDepartment(@RequestBody Department department) {
		Department newDepartment = departmentService.addDepartment(department);
		return new ResponseEntity<>(newDepartment, HttpStatus.CREATED);
	}
	
	@GetMapping("/all")
	public ResponseEntity<List<Department>> findAllDepartment() {
		List<Department> Departments = departmentService.findAllDepartments();
		return new ResponseEntity<>(Departments, HttpStatus.OK);
	}

	@GetMapping("/find/{id}")
	public ResponseEntity<Department> findDepartmentById(@PathVariable Long id) {
		Department Department =  departmentService.findDepartmentById(id);
		return new ResponseEntity<>(Department, HttpStatus.OK);
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<Department> updateDepartment(@RequestBody Department Department, @PathVariable Long id){
		Department selectedDepartment = departmentService.findDepartmentById(id);
		selectedDepartment.setName(Department.getName());
		
		Department updateDepartment = departmentService.updateDepartment(Department);
		return new ResponseEntity<>(updateDepartment, HttpStatus.OK);
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteDepartment(@PathVariable("id") Long id) {
		departmentService.deleteDepartment(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
