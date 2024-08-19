<?php

require_once '../connection.php';

$answer = array();
//print_r($_GET['id']);
//die()

if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $query = $con->prepare("SELECT id, Nom, domaine,photo,contact,id_evenement FROM partenaires WHERE id_evenement = ?");
    $query->bind_param("i", $id);
    if ($query->execute()) {
        $query->store_result(); // Stocke les résultats dans le client
        $numRows = $query->num_rows;
        $query->bind_result($resultid, $Nom, $domaine,$photo,$contact,$id_evenement); // Change $nom to $resultNom

        $profile = array();

        while ($query->fetch()) {
            // Convertir l'image en base64
//            $mediaBase64 = base64_encode($photo);
            $profils = array(
                'id' => $resultid,
                'Nom' => $Nom,
                'domaine' => $domaine,
                'photo' => $photo,
                'contact' => $contact,
                'id_evenement' => $id_evenement,
            );
            $profile [] = $profils ;

        }
      $answer['error'] = false;
       $answer['recu'] = $profile;
//        $answer['num_rows'] = $numRows;
    } else {
        $answer['error'] = true;
        $answer['message'] = "Erreur avec la commande";
    }
} else {
    $answer['error'] = true;
    $answer['message'] = "Donnez un nom";
}
echo json_encode($answer);

