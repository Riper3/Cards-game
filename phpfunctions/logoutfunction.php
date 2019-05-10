<?php

setcookie("login",session_id(),time()-7200);

session_destroy();
