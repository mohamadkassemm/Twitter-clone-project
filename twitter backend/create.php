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
date_default_timezone_set("Asia/Beirut");
$date= date("Y-m-d");

$query = $mysqli->prepare("INSERT INTO users (users_name , users_email, users_username, users_password, users_birthdate, users_created_at, users_gender) VALUE (?, ?, ?, ?, ?, ?, ?)");
$query->bind_param("sssssss",$fullname, $email, $username, $password, $birthdate, $date, $gender);
$query->execute();

?>