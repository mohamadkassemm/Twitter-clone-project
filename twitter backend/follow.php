<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
include("connection.php");

$follower_id = $_POST["follower_id"];
$followed_id = $_POST["followed_id"];

$query = $mysqli->prepare("SELECT follower_id, followed_id FROM follow_relations where follower_id='".$follower_id."' and followed_id='".$followed_id."' ");
$query->execute();
$array = $query->get_result();

$response = '';

while($a = $array->fetch_assoc()){  
    $response= $a;
}
$response= json_encode($response);
if ($response==''){
    $query = $mysqli->prepare("INSERT INTO follow_relations(follower_id,followed_id) VALUE (?,?)");
    $query->bind_param("ii", $follower_id, $followed_id);
    $query->execute();
}
else{
    $query = $mysqli->prepare("DELETE FROM follow_relations where follower_id=? and followed_id=?");
    $query->bind_param("ii", $follower_id, $followed_id);
    $query->execute();
}


?>