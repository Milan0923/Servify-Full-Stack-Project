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
@Table(name="Plantation")
public class Plantation {

	@Id
	@Column(name="NGOID")
	private int ngoId;
	
	@Column(name="cityname",length=20)
	private String cityName;
	
	@Column(name="NGOname",length=50)
	private String ngoName;
	
	@Column(name="contactnumber",length=20)
	private String contactNumber;
}
