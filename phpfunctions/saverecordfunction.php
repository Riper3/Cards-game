<?php
function newRecord($difficulty, $timetrial, $totaltime) {
  require_once "../config/bbdd.php";

  session_start();

  $stmt = $conn->prepare("INSERT INTO records (username, userId, difficulty, timetrial, totaltime) VALUES (?, ?, ?, ?, ?)");
  $stmt->bind_param("sisii", $_SESSION["username"], $_SESSION["userId"], $difficulty, $timetrial, $totaltime);
  $stmt->execute();
  $stmt->close();

}

if(isset($_POST["difficulty"]) && isset($_POST["timetrial"]) && isset($_POST["totaltime"])) {
  echo newRecord($_POST["difficulty"], $_POST["timetrial"], $_POST["totaltime"]);
}
