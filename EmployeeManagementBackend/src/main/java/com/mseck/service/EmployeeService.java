package com.mseck.service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mseck.dto.EmployeeDTO;
import com.mseck.exception.NotFoundException;
import com.mseck.model.Department;
import com.mseck.model.Employee;
import com.mseck.repository.EmployeeRepository;

@Service
public class EmployeeService {
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	private EmployeeDTO convertEntityToDto(Employee employee) {
		
		EmployeeDTO employeeDTO = new EmployeeDTO();
		
		employeeDTO.setId(employee.getId());
		employeeDTO.setName(employee.getName());
		employeeDTO.setEmail(employee.getEmail());
		employeeDTO.setJobTitle(employee.getJobTitle());
		employeeDTO.setPhone(employee.getPhone());
		employeeDTO.setImageUrl(employee.getImageUrl());
		employeeDTO.setDepartment(employee.getDepartment().getName());
		
		return employeeDTO;
	}
	
	public Employee addEmployee(Employee employee) {
		employee.setEmployeeCode(UUID.randomUUID().toString());
		return employeeRepository.save(employee);
	}
	
	public List<EmployeeDTO> findAllEmployees(){
		return employeeRepository.findAll()
				.stream()
				.map(this::convertEntityToDto)
				.collect(Collectors.toList());
	}
	
	public EmployeeDTO findEmployeeById(Long id) {
	        if (id == -1) {     
	            return new EmployeeDTO();
	        }
	        
	        Optional<Employee> employeeOptional = employeeRepository.findById(id);
	        
	        EmployeeDTO employeeDTO = employeeOptional.map(this::convertEntityToDto)
	        .orElseThrow(() -> new NotFoundException("User by id " + id + " not found"));
	        
	        return employeeDTO;
	}
	
	
	public List<EmployeeDTO> findByDepartment(Long departmentId){
		return employeeRepository.findByDepartment(departmentId)
				.stream()
				.map(this::convertEntityToDto)
				.collect(Collectors.toList());
	}
	
	public Employee findEmployeeByIdForUpdate(Long id) {
        if (id == -1) {     
            return new Employee();
        }
        
        Employee employeeOptional = employeeRepository.findById(id)
        .orElseThrow(() -> new NotFoundException("User by id " + id + " not found"));
        
        return employeeOptional;
}

	public Employee updateEmployee(Employee employee) {
		return employeeRepository.save(employee);
	}
	
	public void deleteEmployee(Long id) {
		employeeRepository.deleteById(id);
	}
}
