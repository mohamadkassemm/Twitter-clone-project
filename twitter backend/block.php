<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
include("connection.php");

$blocker_id = $_POST["blocker_id"];
$blocked_id = $_POST["blocked_id"];

$query = $mysqli->prepare("INSERT INTO block_relations(blocker_id,blocked_id) VALUE(?,?)");
$query->bind_param("ii", $blocker_id, $blocked_id);
$query->execute();

$query2 = $mysqli->prepare("DELETE FROM follow_relations where follower_id = `$blocker_id` and followed_id=`$blocked_id`");
$query2->execute();
$array = $query2->get_result();  

$response = [];
$response["success"] = true;

echo json_encode($response);

?>