package com.mseck.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mseck.exception.NotFoundException;
import com.mseck.model.Department;
import com.mseck.repository.DepartmentRepository;

@Service
public class DepartmentService {
	
	@Autowired
	private DepartmentRepository departmentRepository;
	
	public Department addDepartment(Department Department) {
		return departmentRepository.save(Department);
	}
	
	public List<Department> findAllDepartments(){
		return departmentRepository.findAll();
	
	}
	
	public Department findDepartmentById(Long id) {
	        if (id == -1) {     
	            return new Department();
	        }
	        
	        Department departmentOptional = departmentRepository.findById(id)
	        .orElseThrow(() -> new NotFoundException("Department by id " + id + " not found"));
	        
	        return departmentOptional;
	}
	

	public Department updateDepartment(Department department) {
		return departmentRepository.save(department);
	}
	
	public void deleteDepartment(Long id) {
		departmentRepository.deleteById(id);
	}

}
