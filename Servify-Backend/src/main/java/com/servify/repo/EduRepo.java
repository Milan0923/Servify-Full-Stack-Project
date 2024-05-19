package com.servify.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.servify.model.NgoEdu;

@Repository
public interface EduRepo extends JpaRepository<NgoEdu, Integer> {
	
	@Query("from NgoEdu n where n.cityName=:cn")
	List<NgoEdu> findAllByName(String cn);
}
