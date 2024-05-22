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

if(isset($_SESSION['idUzivatel'])) {
    $idUzivatel = $_SESSION['idUzivatel'];

    include("db_connect.php");

    $sql = "SELECT pocetCviceniUzivatel FROM uzivatele";
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();
    $pocetCviceni = $row["pocetCviceniUzivatel"];

    $sql = "SELECT MAX(wpm) AS wpm FROM `stats` WHERE idUzivatel='$idUzivatel'";
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();
    if(isset($row["wpm"])) {
        $maxWpm = round($row["wpm"], 2);
    } else $maxWpm = 0;

    $sql = "SELECT AVG(wpm) AS wpm FROM `stats` WHERE idUzivatel='$idUzivatel'";
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();
    if(isset($row["wpm"])) {
        $avgWpm = $row["wpm"];
    } else $avgWpm = 0;



    $conn->close();

    $data = array("pocetCviceni" => $pocetCviceni, "maxWpm" => $maxWpm, "avgWpm" => $avgWpm);

    echo json_encode($data);
}

?>