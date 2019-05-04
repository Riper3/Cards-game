<?php
function newUser($username, $password, $email) {
  require "bbddfunctions/insertarray.php";
  require "loginfunction.php";

  $user = array('username' => $username, 'password' => $password, 'email' => $email);
  $userid = insertArray('users', $user);

  $user["userId"] = $userid;

  logIn($user);

  return $_SESSION["username"];
}

if(isset($_POST["username"]) && isset($_POST["password"]) && isset($_POST["email"])) {
  echo newUser($_POST["username"], $_POST["password"], $_POST["email"]);
}
