<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header('Content-type: application/json');
header('Content-Type: text/html; charset=utf-8');
session_start();
?>

<?php
$data = json_decode(file_get_contents("php://input"), true);
if(isset($data["email"]) && isset($data["heslo"])) {
    $email = $data["email"];
    $heslo = $data["heslo"];


    include("db_connect.php");

$sql = "SELECT idUzivatel, jmenoUzivatel, prijmeniUzivatel, hesloUzivatel FROM uzivatele WHERE emailUzivatel='$email'";
$result = $conn->query($sql);
$row = $result->fetch_assoc();
if(isset($row["hesloUzivatel"])) {
    $hash = $row["hesloUzivatel"];
    $_SESSION['idUzivatel'] = $row["idUzivatel"];
} else $hash = "";

if (password_verify($heslo, $hash) == true) {
    $data = array("jmeno" => $row["jmenoUzivatel"], "prijmeni" => $row["prijmeniUzivatel"]);
    echo json_encode($data);
} else {
    $data = false;
    echo json_encode($data);
}

$conn->close();

} else {
    echo "Data jsou prázdná.";
}
?>