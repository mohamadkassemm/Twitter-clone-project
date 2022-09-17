<?php
http://localhost/Twitter%20Team%20Project/twitter%20backend/login.php"
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
include("connection.php");

$tweets_content = $_POST["tweets_content"];
$usersid = $_POST["usersid"];

$query = $mysqli->prepare("INSERT INTO tweets(tweets_content,users_id) VALUE (?,?)");
$query->bind_param("si", $tweets_content, $usersid);
$query->execute();

$response = [];
$response["success"] = true;

echo json_encode($response);

?>