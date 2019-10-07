package com.collabera.mha.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "hero_academia")
public class StudentModel {

	@Id
	private int id;

	private String name;
	@Column(name = "hero_name")
	private String hero_name;
	private String quirk;

	
	

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getHeroName() {
		return hero_name;
	}

	public void setHeroName(String name) {
		this.hero_name = name;
	}

	public String getQuirk() {
		return quirk;
	}

	public void setQuirk(String noblePhantasm) {
		quirk = noblePhantasm;
	}

}
