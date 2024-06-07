package com.mseck.dto;

import com.mseck.model.Department;



public class EmployeeDTO {
private long id;
	
	private String name;
	
	private String email;
	
	private String phone;

	private String jobTitle;
	
	private String imageUrl;
	
	private String department;
	
	public EmployeeDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public EmployeeDTO(long id, String name, String email, String phone, String jobTitle, String imageUrl,
			String department) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.jobTitle = jobTitle;
		this.imageUrl = imageUrl;
		this.department = department;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getJobTitle() {
		return jobTitle;
	}

	public void setJobTitle(String jobTitle) {
		this.jobTitle = jobTitle;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	@Override
	public String toString() {
		return "EmployeeDTO [id=" + id + ", name=" + name + ", email=" + email + ", phone=" + phone + ", jobTitle="
				+ jobTitle + ", imageUrl=" + imageUrl + ", department=" + department + "]";
	}

	
	
}
