package application.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import application.models.Event;
import application.models.EventDao;
import application.models.EventList;

/**
 * Class EventController
 */
@RestController
@CrossOrigin
@RequestMapping(value="/events")
public class EventController {

  // ------------------------
  // PUBLIC METHODS
  // ------------------------

  /**
   * Create a new event
   * values.
   */
  @RequestMapping(value="/create")
  @ResponseBody
  public ResponseEntity<EventList> create(@RequestBody Event event)
 {
    eventDao.create(event);

    return getAll();
  }
  
  @RequestMapping(value="")
  @ResponseBody
  public ResponseEntity<EventList> getAll() {
    List<Event> events = eventDao.getAll();
    EventList el = new EventList(events);
    return new ResponseEntity<>(el, HttpStatus.OK);
  }

  @RequestMapping(method = RequestMethod.OPTIONS)
  public ResponseEntity handle() {
      return new ResponseEntity(HttpStatus.NO_CONTENT);
  }

  // ------------------------
  // PRIVATE FIELDS
  // ------------------------
  
  // Wire the EventDao used inside this controller.
  @Autowired
  private EventDao eventDao;
  
} // class EventController
