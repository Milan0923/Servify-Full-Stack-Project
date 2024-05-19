package com.servify.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.servify.model.Registration;

@Repository
public interface RegisterRepo extends JpaRepository<Registration, String>{

	@Query("from Registration r where r.email=:em and r.password=:ps")
	Optional<Registration> checkUser(String em,String ps); 

}
