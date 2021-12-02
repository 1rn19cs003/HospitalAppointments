package com.collegeproject.eventmanager.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.collegeproject.eventmanager.entities.Events;

public interface EventDao extends JpaRepository<Events,Long> {

}
