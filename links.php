<?php

    $serverName = "localhost";
    $username = "root";
    $password = "";
    $name = "berzsenyinyiltnap";

    $usersLink = mysqli_connect($serverName, $username, $password, $name);
    if(!$usersLink){
        die('Nem sikerült csatlakozni az adatbázishoz: ' . mysql_error());
    }

?>