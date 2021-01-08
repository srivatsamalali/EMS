package com.info;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Student {
	@Id
//  @GeneratedValue(strategy = GenerationType.AUTO)
	private int Id;
	private String Name;
	private String Address;
	private String password;

	@Override
	public String toString() {
		return "Student [Id=" + Id + ", Name=" + Name + ", Address=" + Address + ", password=" + password
				+ ", Semester=" + Semester + ", Contact=" + Contact + ", Email=" + Email + ", Fees=" + Fees
				+ ", Attendance=" + Attendance + ", Result=" + Result + "]";
	}

	public int getFees() {
		return Fees;
	}

	public void setFees(int fees) {
		Fees = fees;
	}

	public int getAttendance() {
		return Attendance;
	}

	public void setAttendance(int attendance) {
		Attendance = attendance;
	}

	public float getResult() {
		return Result;
	}

	public void setResult(float result) {
		Result = result;
	}

	private int Semester;
	private String Contact;
	private String Email;
	private int Fees;
	private int Attendance;
	private float Result;

	public Student() {

	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Student(int id, String name, String address, String password, int semester, String contact, String email,
			int fees, int attendance, float result) {
		super();
		Id = id;
		Name = name;
		Address = address;
		this.password = password;
		Semester = semester;
		Contact = contact;
		Email = email;
		Fees = fees;
		Attendance = attendance;
		Result = result;
	}

	public int getId() {
		return Id;
	}

	public void setId(int id) {
		Id = id;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public String getAddress() {
		return Address;
	}

	public void setAddress(String address) {
		Address = address;
	}

	public int getSemester() {
		return Semester;
	}

	public void setSemester(int semester) {
		Semester = semester;
	}

	public String getContact() {
		return Contact;
	}

	public void setContact(String contact) {
		Contact = contact;
	}

	public String getEmail() {
		return Email;
	}

	public void setEmail(String email) {
		Email = email;
	}

}