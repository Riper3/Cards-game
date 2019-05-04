<?php
function newUser($usern, $userp, $email) {
  require_once "bbddfunctions/insertarray.php";
  require_once "loginfunction.php";

  $user = array('username' => $usern, 'password' => $userp, 'email' => $email);
  $userid = insertArray('users', $user);

  $user["userId"] = $userid;

  logIn($user["username"], $user["password"]);

  return $_SESSION["username"];
}

if(isset($_POST["usern"]) && isset($_POST["userp"]) && isset($_POST["email"])) {
  echo newUser($_POST["usern"], $_POST["userp"], $_POST["email"]);
}
