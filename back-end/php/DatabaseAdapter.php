<?php

class DatabaseAdapter {
    private $mysqli = null;

    public function getConnection(){
        if($this->mysqli == null){
            $this->mysqli = new mysqli("localhost", "root", "", "evento");
            if (mysqli_connect_errno()) {
                echo "Failed to connect to MySQL: " . mysqli_connect_error();
            }
        }
        return $this->mysqli;
    }

    public function closeConnection($con){
        mysqli_close($con);
        $this->mysqli = null;
    }
    
}