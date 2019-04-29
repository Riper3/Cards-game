<?php
function newUser($username, $password, $email) {
  require "bbddfunctions/insertarray.php";

  $user = array('username' => $username, 'password' => $password, 'email' => $email);
  insertArray('users', $user);

  return "Ok";
}

if(isset($_POST["username"]) && isset($_POST["password"]) && isset($_POST["email"])) {
  echo newUser($_POST["username"], $_POST["password"], $_POST["email"]);
}
