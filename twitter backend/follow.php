<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
include("connection.php");

$follower_id = $_POST["follower_id"];
$followed_username = $_POST["followed_username"];
$query = $mysqli->prepare("SELECT id from users where users_username='".$followed_username."' ");
$query->execute();
$array = $query->get_result();
$response='';

while($a = $array->fetch_assoc()){  
    $response = $a;
}
$followed_id=$response['id'];
$query = $mysqli->prepare("INSERT INTO follow_relations(follower_id,followed_id) VALUE (?,?)");
$query->bind_param("ii", $follower_id, $followed_id);
$query->execute();


?>