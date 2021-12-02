package com.collegeproject.eventmanager.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.collegeproject.eventmanager.dao.EventDao;

//import org.yaml.snakeyaml.events.Event;

import com.collegeproject.eventmanager.entities.Events;

@Service
public class Eventserviceimpl implements EventService {

	@Autowired
	private EventDao eventDao;
//	List<Events> list;
	
	public  Eventserviceimpl()
	{
//		list=new ArrayList<>();
//		list.add(new Events(1,"Gdsc","Codeflix 2.0"));
//		list.add(new Events(2,"Big O","codeforces 2.0"));
	}
	
	@Override
	public List<Events> getEvents() {
		return eventDao.findAll();
	}
	
	@SuppressWarnings("deprecation")
	@Override
	public Events getEvent(long eventId)
	{
//		Events temp=null;
//		for(Events eve:list)
//		{
//			if(eve.getId()==eventId)
//			{
//				temp=eve;
//				break;
//			}
//		}
		return eventDao.getOne(eventId);
	}

	
	public Events addEvent(Events event) {
//		list.add(event);
		eventDao.save(event);
		return event;
	}

	@Override
	public Events updateEvent(Events event) {
//		list.forEach(e->{
//			if(e.getId()==event.getId()) {
//				e.setTitle(event.getTitle());
//				e.setDescription(event.getDescription());
//			}
//		});
		
		eventDao.save(event);
		return event;
	}

	@Override
	public void deleteEvent(long parseLong) {
//		list=this.list.stream().filter(e->e.getId()!=parseLong).collect(Collectors.toList());
		@SuppressWarnings("deprecation")
		Events env=eventDao.getOne(parseLong);
		eventDao.delete(env);
	}
}
