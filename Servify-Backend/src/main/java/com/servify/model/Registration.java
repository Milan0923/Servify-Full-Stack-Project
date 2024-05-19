package com.servify.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name="Registration")
public class Registration {

	@Id
	@Column(name="EMAIL", length=35)
	private String email;
	@Column(name="FULLNAME", length=30)
	private String fullName;
	@Column(name="PASSWORD", length=20)
	private String password;
	@Column(name="CONTACTNO", length=20)
	private String contactNo;
	
}
