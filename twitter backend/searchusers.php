<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
include("connection.php");

$username = $_GET["users_name"];
$query = $mysqli->prepare("SELECT id, users_name, users_username FROM users where users_name='".$username."' ");
$query->execute();
$array = $query->get_result();

$response = [];

while($a = $array->fetch_assoc()){  
    $response[] = $a;
}

$json = json_encode($response);
echo $json;
?>