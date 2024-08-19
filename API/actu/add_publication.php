<?php
header('Content-Type: application/json');
require_once '../connection.php';
$answer = array();


if (isset($_POST['dat'], $_POST['contenu'], $_POST['typeMedia'] , $_POST['photo'])) {
    $photo = $_POST['photo'];
    $dat = $_POST['dat'];
    $contenu = $_POST['contenu'];
//    $id_evenement = $_POST['id_evenement'];
    $typeMedia = $_POST['typeMedia'];

    $query = $con->prepare("INSERT INTO actualite ( dat,photo, contenu,typeMedia) VALUES ( ?, ?, ?,?)");
    $query->bind_param("ssss", $dat,$photo,  $contenu,$typeMedia);

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
