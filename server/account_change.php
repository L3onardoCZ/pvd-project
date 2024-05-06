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
$idUzivatel = $_SESSION['idUzivatel'];

if(!empty($data["jmeno"]) && !empty($data["prijmeni"]) && !empty($data["email"])) {
    
    include("db_connect.php");
    
    // Create connection
   $stmt = $conn->prepare("UPDATE uzivatele SET jmenoUzivatel= ?, prijmeniUzivatel= ?, emailUzivatel= ? WHERE idUzivatel=$idUzivatel");
   $stmt->bind_param("sss", $jmeno, $prijmeni, $email);
    
   $jmeno = $data["jmeno"];
   $jmeno = strtolower($jmeno);
   $jmeno = ucfirst($jmeno);
   $prijmeni = $data["prijmeni"];
   $prijmeni = strtolower($prijmeni);
   $prijmeni = ucfirst($prijmeni);
   $email = $data["email"];

   $stmt->execute();

    echo "Data byla úspěšně aktualizována.";

    $stmt->close();
    $conn->close();
} else echo json_encode(false);
?>