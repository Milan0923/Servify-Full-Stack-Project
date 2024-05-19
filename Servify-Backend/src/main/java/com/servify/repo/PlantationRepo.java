package com.servify.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.servify.model.Plantation;

public interface PlantationRepo extends JpaRepository<Plantation, Integer> {

	@Query("from Plantation p where p.cityName=:cn")
	List<Plantation> findAllByName(String cn);
}
