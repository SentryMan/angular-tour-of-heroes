package com.collabera.mha.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.collabera.mha.dto.StudentDTO;
import com.collabera.mha.service.StudentService;


@RestController
public class StudentController {

	private final StudentService service;

	public StudentController(StudentService service) {
		super();
		this.service = service;
	}

	@GetMapping("/api/students")
	public List<StudentDTO> getAll() {

		return service.findAll();
	}

	@GetMapping("/api/students/{id}")
	public ResponseEntity<StudentDTO> getByID(@PathVariable int id) {
		StudentDTO hero = service.findById(id);

		return ResponseEntity.ok(hero);
	}

	@PostMapping("/api/students")
	public ResponseEntity<StudentDTO> post(@RequestBody @Valid StudentDTO students) throws URISyntaxException {

		StudentDTO result = service.save(students);

		return ResponseEntity.created(new URI("/api/students/" + result.getId())).body(result);
	}

	@PutMapping("/api/students")
	public ResponseEntity<StudentDTO> update(@RequestBody @Valid StudentDTO hero) {
		StudentDTO result = service.update(hero);
		System.out.println("Got to API");
		return ResponseEntity.ok().body(result);
	}

	@DeleteMapping("/api/students/{id}")
	public ResponseEntity<Void> deleteByID(@PathVariable int id) {

		service.deleteById(id);
		return ResponseEntity.ok().build();
	}

}
