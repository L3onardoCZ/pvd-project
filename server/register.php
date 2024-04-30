<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header('Content-type: application/json');
header('Content-Type: text/html; charset=utf-8');
?>

<?php
include("db_connect.php");

$data = json_decode(file_get_contents("php://input"), true);
$jmeno = $data["jmeno"];
$prijmeni = $data["prijmeni"];
$email = $data["email"];
$heslo = password_hash($data["heslo"], PASSWORD_DEFAULT);

$sql = "SELECT emailUzivatel FROM uzivatele WHERE emailUzivatel='$email'";
$result = $conn->query($sql);
$row = $result->fetch_assoc();

$conn->close();



if(!empty($data["jmeno"]) && !empty($data["prijmeni"]) && !empty($data["email"]) && !empty($data["heslo"]) && !isset($row["emailUzivatel"])) {
    
    include("db_connect.php");
    
    // Create connection
    $sql = "INSERT INTO `uzivatele` (`idUzivatel`, `jmenoUzivatel`, `prijmeniUzivatel`, `emailUzivatel`, `hesloUzivatel`) VALUES (NULL, '$jmeno', '$prijmeni', '$email', '$heslo')";

    if ($conn->query($sql) === TRUE) {
        echo "Data byla úspěšně zapsána do databáze.";
    } else {
        echo "Něco se pokazilo.";
    }

    $conn->close();
} else {
    $data = false;
    echo json_encode($data);
}

?>