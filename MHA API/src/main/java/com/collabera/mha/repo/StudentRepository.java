package com.collabera.mha.repo;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.collabera.mha.model.StudentModel;

// This will be AUTO IMPLEMENTED by Spring into a Bean
// CRUD refers Create, Read, Update, Delete
@Repository
public interface StudentRepository extends JpaRepository<StudentModel, Integer> {

}