<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
include("connection.php");

$users_id = $_POST["users_id"];
$query = $mysqli->prepare("SELECT tweet_id, tweets_content, tweets_created_at from tweets where users_id= '".$users_id."' order by tweets_created_at DESC");
$query->execute();
$array = $query->get_result();

$response = [];

while($a = $array->fetch_assoc()){  
    $response[] = $a;
}

echo json_encode($response);

?>