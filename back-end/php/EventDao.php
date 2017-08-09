<?php

require_once("DatabaseAdapter.php");
require_once("Event.php");
require_once("Utils.php");

class EventDao {
    
    private $da = null;

    public function getAll() {

        if($this->da == null){
            $this->da = new DatabaseAdapter();
        }

        $events = [];

        $con = $this->da->getConnection();

        $sql="SELECT * FROM events";

        if ($result = mysqli_query($con, $sql)) {
            while ($event = mysqli_fetch_object($result, "Event")) {
                array_push($events, $event);
            }
            mysqli_free_result($result);
        }

        $this->da->closeConnection($con);

        return json_encode(array("events" => $events));
    }

    public function create($event) {

        if($this->da == null){
            $this->da = new DatabaseAdapter();
        }

        $events = [];

        $con = $this->da->getConnection();

        $sql = "INSERT INTO events (name, description, creator, email, latitude, longitude, place, theme, color, icon, date, hour)
        VALUES ('".$event->getName()."', '".$event->getDescription()."', '".$event->getCreator()."', '".$event->getEmail()."', '".$event->getLatitude()."', '".$event->getLongitude()."',
        '".$event->getPlace()."', '".$event->getTheme()."', '".$event->getColor()."', '".$event->getIcon()."', '".$event->getDate()."', '".$event->getHour()."')";

        if (!$con->query($sql) === TRUE) {
            echo "Error: " . $sql . "<br>" . $con->error;
        }

        $sql="SELECT * FROM events";

        if ($result = mysqli_query($con, $sql)) {
            while ($event = mysqli_fetch_object($result, "Event")) {
                array_push($events, $event);
            }
            mysqli_free_result($result);
        }

        $this->da->closeConnection($con);

        return json_encode(array("events" => $events));
    }
}