<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
include("connection.php");

$users_id = $_POST["users_id"];
$query = $mysqli->prepare("SELECT distinct(tweet_id),tweets_content,users_namess from follow_relations,tweets,users
where follow_relations.follower_id= '".$users_id."' and tweets.users_id in (SELECT followed_id from  follow_relations where follower_id='".$users_id."') and
 users.id=tweets.users_id");
$query->execute();
$array = $query->get_result();

$response = [];

while($a = $array->fetch_assoc()){  
    $response[] = $a;
}

echo json_encode($response);

?>