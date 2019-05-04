<?php
function checkLogin($usern, $userp) {

  require "../config/bbdd.php";

  $sql = "SELECT * FROM users WHERE username = '$usern' AND password = '$userp'";
  $user = $conn->query($sql)->fetch_assoc();

  unset($sql);

  $conn->close();

  return $user;
}
