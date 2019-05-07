<?php
function logIn($usern, $userp) {
  require "../config/bbdd.php";

  $stmt = $conn->prepare("SELECT * FROM users WHERE username = ? AND password = ?");
  $stmt->bind_param("ss", $usern, $userp);
  $stmt->execute();
  $user = $stmt->get_result()->fetch_assoc();
  $stmt->close();

  if(!empty($user)) {
    session_start();

    $_SESSION["userId"] = $user["userId"];
    $_SESSION["username"] = $user["username"];
    $_SESSION["email"] = $user["email"];

    $returndata = $_SESSION["username"];
  }
  else {
    $returndata = "error";
  }

  return $returndata;
}

if(isset($_POST["username"]) && isset($_POST["password"])) {
  echo logIn($_POST["username"], $_POST["password"]);
}
