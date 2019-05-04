<?php
function logIn($user) {
  session_start();

  $_SESSION["userId"] = $user["userId"];
  $_SESSION["username"] = $user["username"];
  $_SESSION["email"] = $user["email"];
}
