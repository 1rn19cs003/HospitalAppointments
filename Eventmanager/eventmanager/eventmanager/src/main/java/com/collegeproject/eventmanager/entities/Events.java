package com.collegeproject.eventmanager.entities;

import javax.persistence.Entity;

@Entity
public class Events {
	
	public long getId() {
		return Id;
	}
	public void setId(long id) {
		Id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getsubTitle() {
		return subtitle;
	}
	public void setsubTitle(String subtitle) {
		this.subtitle = subtitle;
	}
	@Override
	public String toString() {
		return "Events [Id=" + Id + ", title=" + title + ",subtitle=" + subtitle + ", description=" + description + "]";
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Events() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Events(long id, String title,String subtitle, String description) {
		super();
		Id = id;
		this.title = title;
		this.subtitle = subtitle;
		this.description = description;
	}
	
	@javax.persistence.Id
	private long Id ;
	private String title;
	private String subtitle;
	private String description;
}
