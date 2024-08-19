<?php
header('Content-Type: application/json');
require_once '../connection.php';
$answer = array();

//var_dump($_POST['nom']);
//die();
//var_dump($_POST); // Vérifiez si les données POST sont correctement reçues
//die();

if (isset($_POST['nom'], $_POST['date_debut'],$_POST['concept_devellope'], $_POST['date_fin'], $_POST['photo'])) {
    $photo = $_POST['photo'];
    $nom = $_POST['nom'];
    $date_debut = $_POST['date_debut'];
    $concept_devellope = $_POST['concept_devellope'];
    $date_fin = $_POST['date_fin'];
    //$couleur = $_POST['couleur'];
    //$etat =  $_POST['etat'];

    $query = $con->prepare("INSERT INTO evenement (nom, date_debut,concept_devellope,date_fin,photo) VALUES ( ?,?,?,?,?)");
    $query->bind_param("sssss",  $nom,$date_debut,$concept_devellope,$date_fin,$photo);
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
