package com.servify.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.servify.model.Cleanliness;
import com.servify.model.NgoClothes;
import com.servify.model.NgoEdu;
import com.servify.model.NgoFood;
import com.servify.model.Plantation;
import com.servify.model.Registration;
import com.servify.repo.CleanlinessRepo;
import com.servify.repo.ClothesRepo;
import com.servify.repo.EduRepo;
import com.servify.repo.FoodRepo;
import com.servify.repo.PlantationRepo;
import com.servify.repo.RegisterRepo;

@Service
public class MyService {

	@Autowired
	ClothesRepo repo1;
	
	@Autowired
	FoodRepo repo2;

	@Autowired
	EduRepo repo3;
	
	@Autowired
	PlantationRepo repo4;
	
	@Autowired
	CleanlinessRepo repo5;
	
	@Autowired
	RegisterRepo repo6;
	

	public List<NgoClothes> findAllByName1(String CITYNAME) {
		List<NgoClothes> pn1= repo1.findAllByName(CITYNAME);
		return pn1;
	}
	
	public List<NgoFood> findAllByName2(String CITYNAME) {
		List<NgoFood> pn2= repo2.findAllByName(CITYNAME);
		return pn2;
	}
	
	public List<NgoEdu> findAllByName3(String CITYNAME) {
		List<NgoEdu> pn3= repo3.findAllByName(CITYNAME);
		return pn3;
	}
	
	public List<Plantation> findAllByName4(String CITYNAME) {
		List<Plantation> pn4= repo4.findAllByName(CITYNAME);
		return pn4;
	}
	
	public List<Cleanliness> findAllByName5(String CITYNAME) {
		List<Cleanliness> pn5= repo5.findAllByName(CITYNAME);
		return pn5;
	}

	public void saveUser(Registration usr) {
		repo6.save(usr);	
	}
	
	public Optional<Registration> validateUser(String email,String password) {
		return repo6.checkUser(email, password);	
	}
	
}
