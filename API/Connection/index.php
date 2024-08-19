<?php
header('Content-Type: application/json');
//header('Content-Type: application/json,multipart/form-data');
header("Access-Control-Allow-Origin: *"); // Autorise l'origine spécifique
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// Votre code pour récupérer et envoyer les données JSON

$dbname ="festim";
$host="localhost";
$username ="root";
$password="";
$con = mysqli_connect($host,$username,$password,$dbname);

if (!$con){
    echo "Message : Impossible de se connecter";
    die();
}else{
      echo "Connection effectue avec succes ";
//            header('Content-Type: application/json');
//            header("Access-Control-Allow-Origin: http://localhost:3000"); // Autorise l'origine spécifique
//            header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
//            header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// Votre code pour récupérer et envoyer les données JSON

}










//header('Content-Type: application/json');
////header('Content-Type: application/json,multipart/form-data');
//header("Access-Control-Allow-Origin: *"); // Autorise l'origine spécifique
//header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
//header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
//
//// Votre code pour récupérer et envoyer les données JSON
//
//$dbname ="festim";
//$host="sql201.infinityfree.com";
//$username ="if0_36807974";
//$password="SkyCrescent";
//$con = mysqli_connect($host,$username,$password,$dbname);
//
//if (!$con){
//    echo "Message : Impossible de se connecter";
//    die();
//}else{
//    //   echo "Connection effectue avec succes ";
////            header('Content-Type: application/json');
////            header("Access-Control-Allow-Origin: http://localhost:3000"); // Autorise l'origine spécifique
////            header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
////            header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
//
//// Votre code pour récupérer et envoyer les données JSON
//
//    echo 'Bienvenu';
//
//}





?>