package com.servify.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.servify.model.NgoFood;

@Repository
public interface FoodRepo extends JpaRepository<NgoFood, Integer> {

	@Query("from NgoFood n where n.cityName=:cn")
	List<NgoFood> findAllByName(String cn);
}
