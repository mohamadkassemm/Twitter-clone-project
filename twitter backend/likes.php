<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
include("connection.php");

$users_id=$_POST["users_id"];
$tweets_tweet_id=$_POST["tweets_tweet_id"];


$query = $mysqli->prepare("INSERT INTO likes(users_id,tweets_tweet_id) VALUE (?,?)");
$query->bind_param("ii", $users_id, $tweets_tweet_id);
$query->execute();

$response=[];
$response["success"]=true;

echo json_encode($response);
?>