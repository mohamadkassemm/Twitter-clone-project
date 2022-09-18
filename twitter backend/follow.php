<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
include("connection.php");

$follower_id = $_POST["follower_id"];
$followed_id = $_POST["followed_id"];
$query = $mysqli->prepare("INSERT INTO follow_relations(follower_id,followed_id) VALUE (?,?)");
$query->bind_param("ii", $follower_id, $followed_id);
$query->execute();


?>