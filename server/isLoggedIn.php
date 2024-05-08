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
    $jmenoUzivatel = $_SESSION['jmenoUzivatel'];
    $prijmeniUzivatel = $_SESSION['prijmeniUzivatel'];

    $data = array("boolean" => true, "jmeno" => $jmenoUzivatel, "prijmeni" => $prijmeniUzivatel);
    
    echo json_encode($data);
} else {
    $data = array("boolean" => false);
    echo json_encode($data);
    session_destroy();
}

?>