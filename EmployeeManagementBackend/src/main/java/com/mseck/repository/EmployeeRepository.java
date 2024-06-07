package com.mseck.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.mseck.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long>{
	
	@Query("SELECT e FROM Employee e WHERE e.department.id= :departmentId")
	List<Employee> findByDepartment(@Param("departmentId") Long departmentId);

}
