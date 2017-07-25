package application.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;


@Entity
@Table(name = "events")
public class Event {

  // ------------------------
  // PRIVATE FIELDS
  // ------------------------
  
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long id;
  
  private String name;
  private String description;
  private String creator;
  private String email;
  private String place;
  private double latitude;
  private double longitude;
  private String theme;
  private String color;
  private String icon;
  private String date;
  private String hour;

  // ------------------------
  // PUBLIC METHODS
  // ------------------------
  
  public Event() { }

  public Event(long id) { 
    this.id = id;
  }

  public Event(String name, String description, String creator, String email, String place,
    double latitude, double longitude, String theme, String color,
    String icon, String date, String hour) {
    this.name = name;
    this.description = description;
    this.creator = creator;
    this.email = email;
    this.place = place;
    this.latitude = latitude;
    this.longitude = longitude;
    this.theme = theme;
    this.color = color;
    this.icon = icon;
    this.date = date;
    this.hour = hour;
  }

  public long getId() {
    return id;
  }

  public void setId(long value) {
    this.id = value;
  }

  public String getName() {
    return name;
  }
  
  public void setName(String value) {
    this.name = value;
  }

  public String getDescription() {
    return description;
  }
  
  public void setDescription(String value) {
    this.description = value;
  }

  public String getCreator() {
    return creator;
  }
  
  public void setCreator(String value) {
    this.creator = value;
  }

  public String getEmail() {
    return email;
  }
  
  public void setEmail(String value) {
    this.email = value;
  }

  public String getPlace() {
    return place;
  }
  
  public void setPlace(String value) {
    this.place = value;
  }

  public double getLatitude() {
    return latitude;
  }
  
  public void setLatitude(double value) {
    this.latitude = value;
  }

  public double getLongitude() {
    return longitude;
  }
  
  public void setLongitude(double value) {
    this.longitude = value;
  }

  public String getTheme() {
    return theme;
  }
  
  public void setTheme(String value) {
    this.theme = value;
  }

  public String getColor() {
    return color;
  }
  
  public void setColor(String value) {
    this.color = value;
  }

  public String getIcon() {
    return icon;
  }
  
  public void setIcon(String value) {
    this.icon = value;
  }

  public String getDate() {
    return date;
  }
  
  public void setDate(String value) {
    this.date = value;
  }

  public String getHour() {
    return hour;
  }
  
  public void setHour(String value) {
    this.hour = value;
  }

} // class Event
