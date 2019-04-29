<?php
function insertArray($table, $array) {

  require "../config/bbdd.php";

  $columns = implode(", ",array_keys($array));
  $values = implode("', '", $array);

  $sql = "INSERT INTO $table ($columns) VALUES ('$values')";
  $conn->query($sql);

  unset($sql);

  $conn->close();
}
