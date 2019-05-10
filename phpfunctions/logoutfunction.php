<?php

session_name("login");
session_start();

session_unset();
session_destroy();

unset($_COOKIE['login']);
setcookie("login", "",time()-7200, "/");
