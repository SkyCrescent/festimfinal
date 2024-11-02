<?php
header('Content-Type: application/json');
require_once '../connection.php';
$answer = array();

//var_dump($_POST['nom']);
//die();
//var_dump($_POST); // Vérifiez si les données POST sont correctement reçues
//die();

if (isset($_POST['nom'], $_POST['date_debut'],$_POST['date_fin'], $_POST['media'] , $_POST['prix'] , $_POST['Adresse'])) {
    $photo = $_POST['media'];
    $nom = $_POST['nom'];
    $date_debut = $_POST['date_debut'];
    $date_fin = $_POST['date_fin'];
    $prix = $_POST['prix'];
    $adresse =  $_POST['Adresse'];

    $query = $con->prepare("INSERT INTO formation (nom, date_debut,date_fin,media,Prix_formation,Adresse) VALUES ( ?,?,?,?,?,?)");
    $query->bind_param("ssssis",  $nom,$date_debut,$date_fin,$photo,$prix,$adresse);
    if ($query->execute()) {
        $answer['error'] = false;
        $answer['message'] = "Insertion effectuée avec succès.";
    } else {
        $answer['error'] = true;
        $answer['message'] = "Échec de l'insertion : " . $query->error;
    }
} else {
    $answer['error'] = true;
    $answer['message'] = "Paramètres manquants";
}

echo json_encode($answer);
?>
