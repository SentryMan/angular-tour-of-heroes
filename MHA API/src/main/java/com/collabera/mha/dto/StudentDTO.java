package com.collabera.mha.dto;

public class StudentDTO {
	

	private int id;
	private String name;
	private String heroName;
	private String quirk;
	
	
	public StudentDTO(int id, String name, String heroName, String quirk) {
		super();
		this.id = id;
		this.name = name;
		this.heroName = heroName;
		this.quirk = quirk;
	}
	
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
		return heroName;
	}
	public void setHeroName(String name) {
		this.heroName = name;
	}
	public String getQuirk() {
		return quirk;
	}
	public void setQuirk(String quirk) {
		this.quirk = quirk;
	}


}
