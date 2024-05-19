package com.servify.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.servify.model.NgoFood;
import com.servify.model.Plantation;
import com.servify.model.Registration;
import com.servify.model.Cleanliness;
import com.servify.model.NgoClothes;
import com.servify.model.NgoEdu;
import com.servify.service.MyService;

@CrossOrigin("http://localhost:4200")
@RestController
public class MyController {

	@Autowired
	MyService service;
	
	
	@PostMapping("/adduser")
	public void addUser(@RequestBody Registration usr) {
		System.out.println("Contoller Successful!!");
		service.saveUser(usr);
	}
	
	@GetMapping("/validateuser/{email}/{password}")
	public Optional<Registration> validateUser(@PathVariable String email,@PathVariable String password) {
		System.out.println("User Controller validateUser Successful");
		return service.validateUser(email, password);
		
	}
	
	@GetMapping("/getAllNGOByName1/{CITYNAME}")
	public List<NgoClothes>  getAllNGOByName1(@PathVariable String CITYNAME){
		System.out.println("Successful One");
		List<NgoClothes> pro1 =service.findAllByName1(CITYNAME);
		System.out.println("Beware");
		return pro1;
	}
	
	@GetMapping("/getAllNGOByName2/{CITYNAME}")
	public List<NgoFood>  getAllNGOByName2(@PathVariable String CITYNAME){
		System.out.println("Successful Second");
		List<NgoFood> pro2 =service.findAllByName2(CITYNAME);
		System.out.println("Beware");
		return pro2;
	}
	
	@GetMapping("/getAllNGOByName3/{CITYNAME}")
	public List<NgoEdu>  getAllNGOByName3(@PathVariable String CITYNAME){
		System.out.println("Successful Third");
		List<NgoEdu> pro3 =service.findAllByName3(CITYNAME);
		System.out.println("Beware");
		return pro3;
	}
	
	@GetMapping("/getAllNGOByName4/{CITYNAME}")
	public List<Plantation>  getAllNGOByName4(@PathVariable String CITYNAME){
		System.out.println("Successful Third");
		List<Plantation> pro4 =service.findAllByName4(CITYNAME);
		System.out.println("Beware");
		return pro4;
	}
	
	@GetMapping("/getAllNGOByName5/{CITYNAME}")
	public List<Cleanliness>  getAllNGOByName5(@PathVariable String CITYNAME){
		System.out.println("Successful Third");
		List<Cleanliness> pro5 =service.findAllByName5(CITYNAME);
		System.out.println("Beware");
		return pro5;
	}
	
}
