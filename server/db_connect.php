<?php

$servername = "srv1342.hstgr.io";
$username = "u437445519_databaze_pvd";
$password = "b>Yej+nJfZ9$";
$dbname = "u437445519_databaze_pvd";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}

?>