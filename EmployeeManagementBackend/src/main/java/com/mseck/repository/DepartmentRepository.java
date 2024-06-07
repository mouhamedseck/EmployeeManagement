package com.mseck.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mseck.model.Department;

public interface DepartmentRepository extends JpaRepository<Department, Long>{

}
