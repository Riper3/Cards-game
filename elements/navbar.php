<nav>
  <div class="navbar">
    <div class="nav-element nav-link hover" id="nav-home">Home</div>
    <div class="nav-element nav-link hover" id="nav-game">Game</div>
    <div class="nav-element nav-link hover" id="nav-ranking">Ranking</div>
    <?php if(isset($_COOKIE["login"])) :
      session_name("login");
      session_start();  ?>
      <div class="nav-login nav-link hover" id="nav-login" style="display:none;">Login</div>
      <div class="nav-login nav-link hover" id="nav-register" style="display:none;">Register</div>
      <div class="nav-loged hover" id="nav-logout">Logout</div>
      <div class="nav-loged nav-link hover" id="nav-username"><?= $_SESSION["username"]; ?></div>
    <?php else : ?>
      <div class="nav-login nav-link hover" id="nav-login">Login</div>
      <div class="nav-login nav-link hover" id="nav-register">Register</div>
      <div class="nav-loged hover" id="nav-logout" style="display:none;">Logout</div>
      <div class="nav-loged hover" id="nav-username" style="display:none;">Guest</div>
    <?php endif; ?>
  </div>
</nav>
