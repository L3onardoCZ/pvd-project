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

$data = json_decode(file_get_contents("php://input"));

$aktualniHeslo = $data["aktualniHeslo"];
$noveHeslo = $data["noveHeslo"];

if(!empty($aktualniHeslo) && !empty($noveHeslo) && $_SERVER["request_method"] == "POST" && isset($_SESSION['idUzivatel'])) {
    
    include("db_connect.php");

    $stmt = $conn->prepare("SELECT hesloUzivatel FROM uzivatele WHERE idUzivatel= ?");

    $stmt->bind_param("s", $_SESSION['idUzivatel']);
    $stmt->execute();

    $result = $stmt->get_result();
    $row = $result->fetch_assoc();

    $verify = password_verify($aktualniHeslo, $row["hesloUzivatel"]);

    $stmt->close();
    $conn->close();

    if($verify == true) {

        $idUzivatel = $_SESSION['idUzivatel'];

        $noveHeslo = password_hash($noveHeslo, PASSWORD_DEFAULT);
    
        include("db_connect.php");

        $stmt = $conn->prepare("UPDATE uzivatele (hesloUzivatel)
        VALUES (?) WHERE idUzivatel='$idUzivatel'");

        $stmt->bind_param("s", $noveHeslo);
        $stmt->execute();

        $stmt->close();
        $conn->close();

        echo json_encode(true);
    } else echo json_encode(false);
    
}

?>