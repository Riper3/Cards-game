<?php
function logIn($usern, $userp) {
  require_once "bbddfunctions/checklogin.php";

  $user = checkLogin($usern, $userp);

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
