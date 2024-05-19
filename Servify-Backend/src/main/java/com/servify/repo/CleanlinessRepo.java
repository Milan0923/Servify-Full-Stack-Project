package com.servify.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.servify.model.Cleanliness;

public interface CleanlinessRepo extends JpaRepository<Cleanliness, Integer> {

	@Query("from Cleanliness c where c.cityName=:cn")
	List<Cleanliness> findAllByName(String cn);
}
