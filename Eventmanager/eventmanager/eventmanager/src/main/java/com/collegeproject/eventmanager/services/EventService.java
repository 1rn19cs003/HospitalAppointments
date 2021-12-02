package com.collegeproject.eventmanager.services;

import java.util.List;

import com.collegeproject.eventmanager.entities.Events;

public interface EventService {

	public List<Events> getEvents();
	
	public Events getEvent(long eventId);

	public Events addEvent(Events event);

	public Events updateEvent(Events event);

	public void deleteEvent(long parseLong);
}
