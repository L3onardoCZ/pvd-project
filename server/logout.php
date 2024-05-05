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
session_destroy();
if(!isset($_SESSION['idUzivatel'])) {
    echo "Ukončení session proběhlo úspěšně.";
} else {
    echo "Session pořád běží.";
}
?>