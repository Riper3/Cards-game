<nav>
  <div class="navbar">
    <div class="nav-element nav-link hover">Home</div>
    <div class="nav-element nav-link hover">Game</div>
    <div class="nav-element nav-link hover">Ranking</div>
    <?php if(isset($_COOKIE["login"])) :
      session_name("login");
      session_start();  ?>
      <div class="nav-login nav-link hover" style="display:none;">Login</div>
      <div class="nav-login nav-link hover" style="display:none;">Register</div>
      <div class="nav-loged hover" id="nav-logout">Log out</div>
      <div class="nav-loged hover" id="nav-username"><?= $_SESSION["username"]; ?></div>
    <?php else : ?>
      <div class="nav-login nav-link hover">Login</div>
      <div class="nav-login nav-link hover">Register</div>
      <div class="nav-loged hover" id="nav-logout" style="display:none;">Log out</div>
      <div class="nav-loged hover" id="nav-username" style="display:none;">Guest</div>
    <?php endif; ?>
  </div>
</nav>
