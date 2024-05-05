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
include("db_connect.php");

$idUzivatel = $_SESSION['idUzivtel'];

$sql = "SELECT jmenoUzivatel, prijmeniUzivatel, emailUzivatel FROM uzivatele WHERE idUzivatel = $idUzivatel";

$result = $conn->query($sql);
$row = $result->fetch_assoc();

$conn->close();

$jmeno = $row["jmenoUzivatel"];
$prijmeni = $row["prijmeniUzivatel"];
$email = $row["emailUzivatel"];

$data = array("jmeno" => $jmeno, "prijmeni" => $prijmeni, "email" => $email);

echo json_encode($data);
?>