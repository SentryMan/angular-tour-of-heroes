package com.collabera.mha.mapper;

import org.springframework.stereotype.Component;

import com.collabera.mha.dto.StudentDTO;
import com.collabera.mha.model.StudentModel;

@Component
public class StudentMapper {
	
	public StudentModel toEntity(StudentDTO character) {
		
		StudentModel hero = new StudentModel(); 
		hero.setHeroName(character.getHeroName());
		hero.setName(character.getName());
		hero.setQuirk(character.getQuirk());
		
		return hero;
		
	}
	
	public StudentDTO toDTO(StudentModel character){
		
		StudentDTO hero = new StudentDTO(character.getId(), character.getName(), 
				character.getHeroName(), character.getQuirk()); 
		
		return hero;
		
	}

}
