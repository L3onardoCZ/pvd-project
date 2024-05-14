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

    include("image_delete.php");

    $idUzivatel = $_SESSION['idUzivatel'];
    $random_hash = bin2hex(random_bytes(100));
    
    include("db_connect.php");

    $data = json_decode(file_get_contents('php://input'), true);
    $base64Image = $data['image'];
    $fileExtension = $data['fileExtension'];


    $decodedImage = base64_decode($base64Image);


    $filePath = '../images/'. $random_hash . $idUzivatel . '.' . $fileExtension;
    $filePathDatabase = '/images/'. $random_hash . $idUzivatel . '.' . $fileExtension;

    file_put_contents($filePath, $decodedImage);


    $stmt = $conn->prepare("UPDATE uzivatele SET obrazekUzivatel= ? WHERE idUzivatel=$idUzivatel");
    $stmt->bind_param("s", $filePathDatabase);

    if ($stmt->execute()) {
    echo "Obrázek byl úspěšně nahrán.";
    } else {
    echo "Image upload failed: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}

?>
