<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
include("connection.php");

$blocker_id =$_POST["blocker_id"];
$blocked_id =$_POST["blocked_id"];

$query1 = $mysqli->prepare("SELECT id FROM block_relations where blocker_id ='".$blocker_id."' and blocked_id ='".$blocked_id."'");
$query1->execute();
$array = $query1->get_result();
    
if($array==''){
$query = $mysqli->prepare("INSERT INTO block_relations(blocker_id,blocked_id) VALUE(?,?)");
$query->bind_param("ii", $blocker_id, $blocked_id);
$query->execute();

$query2 = $mysqli->prepare("DELETE FROM follow_relations where follower_id=? and followed_id=?");
$query2->bind_param("ii", $blocker_id, $blocked_id);
$query2->execute();

$query3 = $mysqli->prepare("DELETE FROM follow_relations where follower_id=? and followed_id=?");
$query3->bind_param("ii", $blocked_id, $blocker_id);
$query3->execute();}

else{
$query = $mysqli->prepare("DELETE FROM block_relations where blocker_id=? and blocked_id=?");
$query->bind_param("ii", $blocker_id, $blocked_id);
$query->execute();

$query4 = $mysqli->prepare("DELETE FROM block_relations where blocker_id=? and blocked_id=?");
$query4->bind_param("ii", $blocked_id, $blocker_id);
$query4->execute();
}


$response = [];
$response["success"] = true;

echo json_encode($response);

?>
