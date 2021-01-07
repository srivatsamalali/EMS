package com.info;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.sound.midi.VoiceStatus;

@Entity
public class Student {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	 private int Id;
	private String password;
	private String Name;
	private String Address;
	
	private int Semester;
	private String Contact;
	private String Email;
	public Student() {
		
	}
	
	@Override
	public String toString() {
		return "Student [Id=" + Id + ", password=" + password + ", Name=" + Name + ", Address=" + Address
				+ ", Semester=" + Semester + ", Contact=" + Contact + ", Email=" + Email + "]";
	}

	public Student(int id, String password, String name, String address, int semester, String contact, String email) {
		super();
		Id = id;
		this.password = password;
		Name = name;
		Address = address;
		Semester = semester;
		Contact = contact;
		Email = email;
	}

	public int getId() {
		return Id;
	}
	public void setId(int id) {
		Id = id;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
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
