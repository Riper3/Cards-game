<?php
function getRanking() {
  require_once "../config/bbdd.php";

  $query = $conn->query("SELECT username, difficulty, timetrial, totaltime FROM records");

  foreach ($query as $element) {
    $result[] = $element;
  }

  $conn->close();

  return json_encode($result);
}

if(isset($_POST["refresh"])) {
  echo getRanking();
}
