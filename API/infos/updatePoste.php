<?php

header('Content-Type: application/json');
require_once '../connection.php';

$answer = array();
//
//error_log(var_dump($_POST, true));
//error_log(print_r($_FILES, true));
//die();
//
//print_r("id".$_POST['id']);
//var_dump($_FILES['media']);
//print_r($_POST['dat']);
//print_r( $_POST['contenu']);
//print_r($_POST['visible']);
//die();
//
if (isset($_POST['id'], $_POST['contenu'])) {
    try {
        $contenu = $_POST['contenu'];
        $id = $_POST['id'];

        $query = $con->prepare("UPDATE publication SET contenu = ? WHERE id = ?");
        $query->bind_param("si",  $contenu, $id);

        if ($query->execute()) {
            $answer['error'] = false;
            $answer['message'] = "Mise à jour effectuée avec succès.";
        } else {
            $answer['error'] = true;
            $answer['message'] = "Mise à jour impossible : " . $con->error;
        }
    } catch (Exception $e) {
        $answer['error'] = true;
        $answer['message'] = "Erreur : " . $e->getMessage();
    }
} else {
    $answer['error'] = true;
    $answer['message'] = "Fournir les éléments à mettre à jour.";
}

echo json_encode($answer);
?>