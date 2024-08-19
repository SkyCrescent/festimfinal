<?php

require_once '../connection.php';

$answer = array();
//    //print_r ($_POST['prenom']);
//die();
if (isset($_GET['id'])) {
    $id = $_GET['id'];

    // Use a try-catch block for better error handling
    try {
        $query = $con->prepare("SELECT id,dat,photo,contenu,id_evenement,typemedia FROM `publication` WHERE id_evenement =?");
        $query->bind_param("i", $id);

        if ($query->execute()) {
            $query->store_result();

            if ($query->num_rows > 0) {
                $query->bind_result($resultid, $dat,$photo, $contenu,$id_evenement,$typemedia );

                $profiles = array(); // Fixed variable name

                while ($query->fetch()) {
                    // Convertir l'image en base64
//                    $mediaBase64 = base64_encode($photo);

                    $profils = array(
                        'id' => $resultid,
                        'dat' => $dat,
                        'contenu' => $contenu,
                        'photo' => $photo,
                        'id_evenement' =>$id_evenement,
                        'typemedia'=>$typemedia
                    );
                    $profiles[] = $profils;
                }

                $answer['error'] = false;
                $answer['recu'] = $profiles;
                echo json_encode($answer);
            } else {
                $answer['error'] = true;
                $answer['message'] = "Aucun enregistrement trouvé avec l'ID spécifié." .$id;
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
?>
