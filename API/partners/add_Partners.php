<?php
header('Content-Type: application/json');
require_once '../connection.php';
$answer = array();

//var_dump($_POST['nom']);
//die();
//var_dump($_POST); // Vérifiez si les données POST sont correctement reçues
//die();

if (isset($_POST['Nom'],$_POST['domaine'],$_POST['contact'], $_POST['photo'], $_POST['id_evenement'])) {
    $photo = $_POST['photo'];
    $Nom = $_POST['Nom'];
    $domaine = $_POST['domaine'];
    $contact = $_POST['contact'];
$id_evenement = $_POST['id_evenement'];
    $query = $con->prepare("INSERT INTO partenaires (Nom,domaine,photo,contact,id_evenement) VALUES (?,?,?,?,?)");
    $query->bind_param("ssssi",  $Nom,$domaine,$photo,$contact,$id_evenement);
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
