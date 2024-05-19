<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header('Content-type: application/json');
header('Content-Type: text/html; charset=utf-8');
session_start();
?>

<?php

$data = json_decode(file_get_contents("php://input"), true);

if(isset($data["timeElapsed"]) && isset($data["wpm"]) && isset($_SESSION['idUzivatel'])) {

    $idUzivatel = $_SESSION['idUzivatel'];

    $timeElapsed = round($data["timeElapsed"], 2);
    $wpm = $data["wpm"];

    include("db_connect.php");

    $sql = "INSERT INTO `stats`(`idUzivatel`, `wpm`, `cas`) VALUES ('$idUzivatel','$wpm','$timeElapsed')";

    if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
    } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $sql = "UPDATE uzivatele SET pocetCviceniuzivatel = pocetCviceniUzivatel + 1 WHERE idUzivatel='$idUzivatel'";
    $conn->query($sql);

    $conn->close();
} else json_encode("Něco se pokazilo.");

?>