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

    $sql = "SELECT obrazekUzivatel FROM uzivatele WHERE idUzivatel=$idUzivatel";
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();

    $conn->close();
}

if(isset($row['obrazekUzivatel'])) {
    $filePath = $row['obrazekUzivatel'];
    echo json_encode($filePath);
} else echo json_encode(false);

?>