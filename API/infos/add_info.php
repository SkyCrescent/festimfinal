<?php
header('Content-Type: application/json');
require_once '../connection.php';
$answer = array();


if (isset($_POST['contenu'] ,$_POST['id_evenement'] ,$_POST['paragraphe'])) {
    $contenu = $_POST['contenu'];
    $id_evenement = $_POST['id_evenement'];
    $paragraphe= $_POST['paragraphe'];

    $query = $con->prepare("INSERT INTO information (  contenu,paragraphe, id_evenement) VALUES (?,?, ?)");
    $query->bind_param("ssi",   $contenu, $paragraphe,$id_evenement);

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
