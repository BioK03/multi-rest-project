<?php

class Event implements JsonSerializable {
    protected $id;

    protected $name;

    protected $description;

    protected $creator;

    protected $email;

    protected $latitude;

    protected $longitude;

    protected $place;

    protected $theme;

    protected $color;

    protected $icon;

    protected $date;

    protected $hour;

    function __construct() {

    }

    function constructFromJson($json) {
        $jsonArray = json_decode($json, true);
        foreach($jsonArray as $key=>$value){
            $this->$key = $value;
        }
    }

    function getId()
    {
        return $this->id;
    }

    function getName()
    {
        return $this->name;
    }

    function getDescription()
    {
        return $this->description;
    }

    function getCreator()
    {
        return $this->creator;
    }

    function getEmail()
    {
        return $this->email;
    }

    function getLatitude()
    {
        return $this->latitude;
    }

    function getLongitude()
    {
        return $this->longitude;
    }

    function getPlace()
    {
        return $this->place;
    }

    function getTheme()
    {
        return $this->theme;
    }

    function getColor()
    {
        return $this->color;
    }

    function getIcon()
    {
        return $this->icon;
    }

    function getDate()
    {
        return $this->date;
    }

    function getHour()
    {
        return $this->hour;
    }
    

    function setId($id)
    {
        $this->id = $id;
    }

    function setName($name)
    {
        $this->name = $name;
    }

    function setDescription($description)
    {
        $this->description = $description;
    }

    function setCreator($creator)
    {
        $this->creator = $creator;
    }

    function setEmail($email)
    {
        $this->email = $email;
    }

    function setLatitude($latitude)
    {
        $this->latitude = $latitude;
    }

    function setLongitude($longitude)
    {
        $this->longitude = $longitude;
    }

    function setPlace($place)
    {
        $this->place = $place;
    }

    function setTheme($theme)
    {
        $this->theme = $theme;
    }

    function setColor($color)
    {
        $this->color = $color;
    }

    function setIcon($icon)
    {
        $this->icon = $icon;
    }

    function setDate($date)
    {
        $this->date = $date;
    }

    function setHour($hour)
    {
        $this->hour = $hour;
    }

    public function jsonSerialize() {
        return [
            'id' => $this->getId(),
            'name' => utf8_encode($this->getName()),
            'description' => utf8_encode($this->getDescription()),
            'creator' => utf8_encode($this->getCreator()),
            'email' => utf8_encode($this->getEmail()),
            'latitude' => $this->getLatitude(),
            'longitude' => $this->getLongitude(),
            'place' => utf8_encode($this->getPlace()),
            'theme' => utf8_encode($this->getTheme()),
            'color' => $this->getColor(),
            'icon' => $this->getIcon(),
            'date' => $this->getDate(),
            'hour' => $this->getHour()
        ];
    }
}