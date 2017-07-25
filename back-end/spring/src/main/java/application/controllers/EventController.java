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
  public ResponseEntity<List<Event>> create(
    @RequestParam(value="name") String name, 
    @RequestParam(value="description") String description, 
    @RequestParam(value="creator") String creator, 
    @RequestParam(value="email") String email, 
    @RequestParam(value="place") String place,
    @RequestParam(value="latitude") Double latitude, 
    @RequestParam(value="longitude") Double longitude, 
    @RequestParam(value="theme") String theme, 
    @RequestParam(value="color") String color,
    @RequestParam(value="icon") String icon, 
    @RequestParam(value="date") String date, 
    @RequestParam(value="hour") String hour) {
    
    Event event = new Event(name, description, creator, email, place, latitude, longitude, theme, color, icon, date, hour);
    eventDao.create(event);

    return getAll();
  }
  
  @RequestMapping(value="")
  @ResponseBody
  public ResponseEntity<List<Event>> getAll() {
    return new ResponseEntity<>(eventDao.getAll(), HttpStatus.OK);
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
