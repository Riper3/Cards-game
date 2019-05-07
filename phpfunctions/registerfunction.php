<?php
function newUser($usern, $userp, $email) {
  require_once "../config/bbdd.php";
  require_once "loginfunction.php";

  $passw = password_hash($userp, PASSWORD_DEFAULT);

  $stmt = $conn->prepare("INSERT INTO users (username, password, email) VALUES (?, ?, ?)");
  $stmt->bind_param("sss", $usern, $passw, $email);
  $stmt->execute();
  $stmt->close();

  logIn($usern, $userp);

  return $usern;
}

if(isset($_POST["usern"]) && isset($_POST["userp"]) && isset($_POST["email"])) {
  echo newUser($_POST["usern"], $_POST["userp"], $_POST["email"]);
}
