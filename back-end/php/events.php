<?php

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');
header('Access-Control-Allow-Methods: GET, POST');
require_once("EventDao.php");

if(endsWith($_SERVER['REQUEST_URI'], "create")) {
    if($_SERVER['REQUEST_METHOD'] == "POST") {
        $event = new Event();
        $event->constructFromJson(file_get_contents('php://input'));
        
        $eventDao = new EventDao();
        print($eventDao->create($event));
    }
    
} else {
    if($_SERVER['REQUEST_METHOD'] == "GET"){
        $eventDao = new EventDao();
        print($eventDao->getAll());
    }
    
}

