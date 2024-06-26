<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header('Content-type: application/json');
header('Content-Type: text/html; charset=utf-8');
?>

<?php
include("db_connect.php");

$stmt = $conn->prepare("SELECT emailUzivatel FROM uzivatele WHERE emailUzivatel= ?");
$stmt->bind_param("s", $email);

$data = json_decode(file_get_contents("php://input"), true);

$jmeno = trim($data["jmeno"]);
$jmeno = strtolower($jmeno);
$jmeno = ucfirst($jmeno);

$prijmeni = trim($data["prijmeni"]);
$prijmeni = strtolower($prijmeni);
$prijmeni = ucfirst($prijmeni);

$email = trim($data["email"]);
$nezasifrovaneHeslo = trim($data["heslo"]);
$heslo = trim($data["heslo"]);
$heslo = password_hash($heslo, PASSWORD_DEFAULT);

$stmt->execute();


$result = $stmt->get_result();
$row = $result->fetch_assoc();

$stmt->close();
$conn->close();



if(!empty($jmeno) && !empty($prijmeni) && !empty($email) && !empty($nezasifrovaneHeslo)) {
   if(!isset($row["emailUzivatel"])) {
     include("db_connect.php");
    
    // Create connection
   $stmt = $conn->prepare("INSERT INTO `uzivatele` (`idUzivatel`, `jmenoUzivatel`, `prijmeniUzivatel`, `emailUzivatel`, `hesloUzivatel`) VALUES (NULL, ?, ?, ?, ?)");
   $stmt->bind_param("ssss", $jmeno, $prijmeni, $email, $heslo);
   $stmt->execute();

    echo "Data byla úspěšně zapsána do databáze.";

    $stmt->close();
    $conn->close();
   } else echo json_encode("prazdne");
} else echo json_encode(false);

?>