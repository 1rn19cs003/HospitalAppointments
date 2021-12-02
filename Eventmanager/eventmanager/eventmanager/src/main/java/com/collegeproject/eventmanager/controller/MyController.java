package com.collegeproject.eventmanager.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.collegeproject.eventmanager.entities.Events;
import com.collegeproject.eventmanager.services.EventService;



@CrossOrigin
@RestController
public class MyController {
	
	@Autowired
	private EventService eventService;
	
	@GetMapping("/home")
	public String home()
	{
		return "This is home page";
	}
	
	//Get the Events
	@CrossOrigin
	@GetMapping("/events")
	public List<Events> getEvents()
	{
		return this.eventService.getEvents();
	}	
	//get events by ID	
	@CrossOrigin
	@GetMapping("/events/{eventId}")
	public Events getEvent(@PathVariable String eventId)
	{
		return this.eventService.getEvent(Long.parseLong(eventId));
	}
	
	//Posting and creating	
	@CrossOrigin
	@PostMapping(path="/events",consumes="application/json")
	public Events addEvent(@RequestBody Events event)
	{
		return this.eventService.addEvent(event);	
	}
	//update event using PUT request	
	@CrossOrigin
	@PutMapping("/events")
	public Events updateEvent(@RequestBody Events event)
	{
		return this.eventService.updateEvent(event);
	}
	
	//Delete the Event
	@CrossOrigin
	@DeleteMapping("/events/{eventId}")
	public ResponseEntity<HttpStatus> deleteEvent(@PathVariable String eventId)
	{
		try {
			this.eventService.deleteEvent(Long.parseLong(eventId));
			return new ResponseEntity<>(HttpStatus.OK);
		} catch(Exception e)
		{
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
}
