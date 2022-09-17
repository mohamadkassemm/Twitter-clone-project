<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
include("connection.php");

$blocker_id = $_POST["blocker_id"];
$usersid = $_POST["blocked_id"];

$query = $mysqli->prepare("INSERT INTO block_relations(blocker_id,blocked_id) VALUE (?,?)");
$query->bind_param("si", $blocker_id, $blocked_id);
$query->execute();

$response = [];
$response["success"] = true;

echo json_encode($response);

?>