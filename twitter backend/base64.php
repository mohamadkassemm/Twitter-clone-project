<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
include("connection.php");

$tweets_tweet_id  = $_POST["tweets_tweet_id"];
$tweets_picture_url = $_POST["tweets_picture_url"];

$query = $mysqli->prepare("INSERT INTO tweets_picture(tweets_tweet_id ,tweets_picture_url) VALUE(?,?)");
$query->bind_param("is", $tweets_tweet_id , $tweets_picture_url);
$query->execute();

$query = $mysqli->prepare("SELECT tweets_picture_url FROM tweets_picture where tweets_tweet_id= '".$tweets_tweet_id."'");
$query->execute();
$array = $query->get_result();

$response=[];

while($a = $array->fetch_assoc()){
    $response[] = $a;
}

$json = json_encode($response);

$url=base64_decode($tweets_picture_url);

echo($url);

?>