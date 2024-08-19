<?php
header('Content-Type: application/json');
require_once '../connection.php';
$answer = array();


//print_r("le nom: " . $_POST['contact']);
//die();
//print_r("adresse".$_POST ['adresse']);
//print_r("la photo".$_POST ['photo']);
//print_r("Le phone".$_POST ['phone']);
//
//print_r($_FILES['media']);



//var_dump($_POST['nom']);
//die();
//var_dump($_POST); // Vérifiez si les données POST sont correctement reçues
//die();
//
//formData.append('pays', values.pays);
//formData.append('genre', values.genre);
//formData.append('profession', values.proffession);
//formData.append('fonction', values.fonction);

////

if (isset($_POST['photo'], $_POST['nom'], $_POST['adresse'], $_POST['contact'] ,$_POST['prenom'], $_POST['ville'], $_POST['email'], $_POST['id_evenement'])) {
$photo = ($_POST['photo']);
$nom = $_POST['nom'];
$adresse = $_POST['adresse'];
$contact = $_POST['contact'];
$prenom= $_POST['prenom'];
$ville =$_POST['ville'];
$email =$_POST['email'];
$id= $_POST['id_evenement'];


    $pays= $_POST['pays'];
    $genre= $_POST['genre'];
    $profession= $_POST['profession'];
    $fonction= $_POST['fonction'];


    $phoneNumber = $_POST['contact'];
    $phoneNumberWithoutSlashes = preg_replace('/\//', '', $phoneNumber);


$query = $con->prepare("INSERT INTO interesse (photo, nom, adresse, contact,prenom,ville,email,id_evenement,pays,genre,profession,fonction) VALUES (?,?,?,?,?, ?, ?, ?,?,?,?,?)");
$query->bind_param("sssssssissss", $photo, $nom, $adresse, $contact,$prenom,$ville,$email,$id,$pays,$genre,$profession,$fonction);
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
