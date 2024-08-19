<?php


require_once '../connection.php';

$answer = array();
//    //print_r ($_POST['prenom']);
//die();
if (isset($_GET['id'])) {
    $id = $_GET['id'];

    // Use a try-catch block for better error handling
    try {
        $query = $con->prepare("SELECT  id ,nom, date_debut,concept_devellope,date_fin,couleur,photo FROM evenement WHERE id =?");
        $query->bind_param("i", $id);

        if ($query->execute()) {
            $query->store_result();

            if ($query->num_rows > 0) {
                $query->bind_result($resultid,$nom,$date_debut,$concept_devellope,$date_fin,$couleur,$photo);

                $profiles = array(); // Fixed variable name

                while ($query->fetch()) {
                    // Convertir l'image en base64
//                    $mediaBase64 = base64_encode($photo);

                    $profils = array(
                        'id' => $resultid,
                        'nom' => $nom,
                        'date_debut' => $date_debut,
                        'concept_devellope' => $concept_devellope,
                        'date_fin' => $date_fin,
                        'couleur' => $couleur,
                        //'etat'=>$etat,
                        'photo' => $photo,
                    );
                    $profiles[] = $profils;
                }

                $answer['error'] = false;
                $answer['recu'] = $profiles;
                echo json_encode($answer);
            } else {
                $answer['error'] = true;
                $answer['message'] = "Aucun enregistrement trouvé avec l'ID spécifié." . $id;
                echo json_encode($answer);
            }
        } else {
            $answer['error'] = true;
            $answer['message'] = "Erreur avec la commande : " . $con->error;
            echo json_encode($answer);
        }
    } catch (Exception $e) {
        $answer['error'] = true;
        $answer['message'] = "Erreur : " . $e->getMessage();
        echo json_encode($answer);
    }
} else {
    $answer['error'] = true;
    $answer['message'] = "Donnez un ID valide.";
    echo json_encode($answer);
}





























//
//require_once '../connection.php';
//
//$answer = array();
////print_r($_GET['id']);
////die()
//
//if (isset($_GET['id'])) {
//    $id = $_GET['id'];
//    $query = $con->prepare("SELECT id ,nom, date_debut,concept_devellope,date_fin,couleur,photo FROM evenement WHERE id = ?");
//    $query->bind_param("i", $id);
//    if ($query->execute()) {
//        $query->store_result(); // Stocke les résultats dans le client
//        $numRows = $query->num_rows;
//        $query->bind_result($id,$nom,$date_debut,$concept_devellope,$date_fin,$couleur,$photo); // Change $nom to $resultNom
//
//        $profile = array();
//
//        while ( $query->fetch()){
//            $profils = array(
//                'id' => $id,
//                'nom' => $nom,
//                'date_debut' => $date_debut,
//                'concept_devellope' => $concept_devellope,
//                'date_fin' => $date_fin,
//                'couleur' => $id_poste,
//                'date_debut' => $id_poste,
//            );
//            $profile [] = $profils ;
//
//        }
//      $answer['error'] = false;
//       $answer['recu'] = $profile;
////        $answer['num_rows'] = $numRows;
//    } else {
//        $answer['error'] = true;
//        $answer['message'] = "Erreur avec la commande";
//    }
//} else {
//    $answer['error'] = true;
//    $answer['message'] = "Donnez un nom";
//}
//echo json_encode($answer);
//
