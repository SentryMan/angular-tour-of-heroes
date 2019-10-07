package com.collabera.mha.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.collabera.mha.dto.StudentDTO;
import com.collabera.mha.mapper.StudentMapper;
import com.collabera.mha.model.StudentModel;
import com.collabera.mha.repo.StudentRepository;

@Service
@Transactional
public class StudentService {
	
	private final StudentRepository Repo;
	private final StudentMapper Map;
	
	public StudentService(StudentRepository repo, StudentMapper map) {
		super();
		Repo = repo;
		Map = map;
	}
	
	public List<StudentDTO> findAll() {
		
		return Repo.findAll().stream().map(m -> Map.toDTO(m)).collect(Collectors.toList());
		
	}
	
	public StudentDTO findById(int id) {
		Optional<StudentModel> fateOp = Repo.findById(id);
		if (fateOp.isPresent()) {
			return Map.toDTO(fateOp.get());
		}
		return null;
	}

	public StudentDTO save(StudentDTO hero) {
		StudentModel entity = Map.toEntity(hero);
		StudentModel saved = Repo.save(entity);
		return Map.toDTO(saved);
	}

	public StudentDTO update(StudentDTO hero) {
		int id = hero.getId();
		Optional<StudentModel> findById = Repo.findById(id);
		if (findById.isPresent()) {
			StudentModel uHero = findById.get();
			uHero.setName(hero.getName());
			uHero.setHeroName(hero.getHeroName());
			uHero.setQuirk(hero.getQuirk());
			StudentModel saved = Repo.save(uHero);
			return Map.toDTO(saved);
		} else { 
			throw new IllegalArgumentException();
		}
	}

	public void deleteById(int id) {
		Repo.deleteById(id);
	}
	
}
