<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
include("connection.php");

$username = $_POST["username"];

$query = $mysqli->prepare("SELECT id FROM users WHERE users_username= ?");
$query->bind_param("s", $username);
$query->execute();
$array = $query->get_result();
$response=[];
while($a = $array->fetch_assoc()){
    $response[] = $a;
}
if ($response==[]){
    $result['valid']=True;
}
else{
    $result['valid']=False;
}
$json = json_encode($result);
echo $json;
?>