<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
include("connection.php");

$email = $_POST["email"];
$password= hash("sha256", $_POST["password"]);
$query = $mysqli->prepare("SELECT id, users_email, users_password FROM users where users_email='".$email."' and  users_password= '".$password."' ");
$query->execute();
$array = $query->get_result();

$response = [];

while($a = $array->fetch_assoc()){
    $response[] = $a;
}


if ($response==[]){
    $result['valid']=False;
    $result['id']= Null;
}
else{
    $result['valid']=True;
    $result['id']= json_encode($response[0]['id']);
}
$json = json_encode($result);
echo $json;
?>