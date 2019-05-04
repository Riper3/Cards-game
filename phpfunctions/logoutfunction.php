<?php
function logOut() {
  session_unset();

  session_destroy(); 
}
