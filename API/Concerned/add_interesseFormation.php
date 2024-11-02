<?php
header('Content-Type: application/json');
require_once '../connection.php';
$answer = array();

//$_POST['photo'], $_POST['nom'], $_POST['adresse'], $_POST['contact'] ,$_POST['prenom'], $_POST['ville'], $_POST['email'], $_POST['nomEvents']
// print_r("le nom: " . $_POST['photo']);
//
// print_r("le nom: " . $_POST['nom']);
// print_r("le nom: " . $_POST['adresse']);
// print_r("le nom: " . $_POST['contact']);
// print_r("le nom: " . $_POST['prenom']);
// print_r("le nom: " . $_POST['ville']);
// print_r("le nom: " . $_POST['email']);
// print_r("le nom: " . $_POST['id_evenement']);

//die();
//print_r("adresse".$_POST ['adresse']);
//print_r("la photo".$_POST ['photo']);
//print_r("Le phone".$_POST ['phone']);
//
//print_r($_FILES['media']);


if (isset($_POST['photo'], $_POST['nom'], $_POST['adresse'], $_POST['contact'] ,$_POST['prenom'], $_POST['ville'], $_POST['email'], $_POST['id_formation'])) {
$photo = ($_POST['photo']);
$nom = $_POST['nom'];
$adresse = $_POST['adresse'];
$contact = $_POST['contact'];
$prenom= $_POST['prenom'];
$ville =$_POST['ville'];
$email =$_POST['email'];
$id= $_POST['id_formation'];


    $pays= $_POST['pays'];
    $genre= $_POST['genre'];
    $profession= $_POST['profession'];
    $fonction= $_POST['fonction'];


    $phoneNumber = $_POST['contact'];
    $phoneNumberWithoutSlashes = preg_replace('/\//', '', $phoneNumber);


$query = $con->prepare("INSERT INTO interesse_formation (media, nom, adresse, phone,prenom,ville,email,id_formation,pays,genre,proffession,fonction) VALUES (?,?,?,?,?, ?, ?, ?,?,?,?,?)");
$query->bind_param("ssssssssssss", $photo, $nom, $adresse, $contact,$prenom,$ville,$email,$id,$pays,$genre,$profession,$fonction);
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
