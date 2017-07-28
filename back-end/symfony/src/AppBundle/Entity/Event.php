<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity()
 * @ORM\Table(name="events")
 *
 */
class Event
{

    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue
     */
    protected $id;

    /**
     * @ORM\Column(type="string", nullable=false)
     */
    protected $name;

    /**
     * @ORM\Column(type="string", nullable=false)
     */
    protected $description;

    /**
     * @ORM\Column(type="string", nullable=false)
     */
    protected $creator;

    /**
     * @ORM\Column(type="string", nullable=false)
     */
    protected $email;

    /**
     * @ORM\Column(type="float", nullable=false)
     */
    protected $latitude;

    /**
     * @ORM\Column(type="float", nullable=false)
     */
    protected $longitude;

    /**
     * @ORM\Column(type="string", nullable=false)
     */
    protected $place;

    /**
     * @ORM\Column(type="string", nullable=false)
     */
    protected $theme;

    /**
     * @ORM\Column(type="string", nullable=false)
     */
    protected $color;

    /**
     * @ORM\Column(type="string", nullable=false)
     */
    protected $icon;

    /**
     * @ORM\Column(type="string", nullable=false)
     */
    protected $date;

    /**
     * @ORM\Column(type="string", nullable=false)
     */
    protected $hour;


    public function __construct()
    {
        
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
}
