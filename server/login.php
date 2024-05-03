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
if(isset($data["email"]) && isset($data["heslo"])) {
    $email = $data["email"];
    $heslo = $data["heslo"];


    include("db_connect.php");

$stmt = $conn->prepare("SELECT idUzivatel, jmenoUzivatel, prijmeniUzivatel, hesloUzivatel FROM uzivatele WHERE emailUzivatel= ?");

$stmt->bind_param("s", $email);
$stmt->execute();



$result = $stmt->get_result();
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
    session_destroy();
    echo json_encode($data);
}
$stmt->close();
$conn->close();

} else {
    echo "Data jsou prázdná.";
}
?>