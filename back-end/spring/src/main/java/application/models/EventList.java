package application.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import java.util.List;


public class EventList {

  // ------------------------
  // PRIVATE FIELDS
  // ------------------------
  
  private List<Event> events;

  // ------------------------
  // PUBLIC METHODS
  // ------------------------
  
  public EventList() { }

  public EventList(List<Event> events) { 
    this.events = events;
  }

  public List<Event> getEvents() {
    return events;
  }

  public void setEvents(List<Event> events) {
    this.events = events;
  }



} // class Event
