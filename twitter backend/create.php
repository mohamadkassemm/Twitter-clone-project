<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
include("connection.php");

$username=$_POST["username"];
$email=$_POST["email"];
$password= hash("sha256", $_POST["password"]);
$fullname= $_POST["fullname"];
$birthdate= $_POST["birthdate"];
$gender= $_POST["gender"];

$query = $mysqli->prepare("INSERT INTO users (users_name , users_email, users_username, users_password, users_birthdate, users_gender) VALUE (?, ?, ?, ?, ?, ?)");
$query->bind_param("ssssss",$fullname, $email, $username, $password, $birthdate, $gender);
$query->execute();

$query = $mysqli->prepare("SELECT id from users where users_email='".$email."' ");
$query->execute();
$array = $query->get_result();

while($a = $array->fetch_assoc()){
    $response = $a;
}

echo json_encode($response);
?>