package com.servify.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.servify.model.NgoClothes;

@Repository
public interface ClothesRepo extends JpaRepository<NgoClothes, Integer>{

//	@Query("from NGO n where n.ngoId=:cn")
//	NGO findByID(String cn);

	@Query("from NgoClothes n where n.cityName=:cn")
	List<NgoClothes> findAllByName(String cn);
	
}
