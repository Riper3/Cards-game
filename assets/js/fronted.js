// Change div

$(".nav-link").click(function(){
  $(".main-div").hide();
  document.title = "Cards | "+$(this).text();
  var linkdiv = "#div-"+$(this).text().toLowerCase();
  $(linkdiv).show();

  //Remove errors from register div
  if($(this).text() != "Register") {
    $(".error-register").remove();
  }

  //Reset game
  if($(this).text() != "Game") {
    $(".game-card").remove();
    $(".game-card-clicled").remove();
    $("#game-end").hide();
    $(".game-time").show();
  }
});

// Hover

$(".hover").hover(function(){
  $(this).css('background-color', 'white');
  $(this).css('color', 'black');
}, function(){
  $(this).css('background-color', '#1a75ff');
  $(this).css('color', 'white');
});

// Inputs

$("input").focus(function(){
  $(this).css("background-color", "#1a75ff");
  $(this).css("color", "white");
});

$("input").blur(function(){
  $(this).css("background-color", "#ffffff");
  $(this).css("color", "black");
});

// Register validation
$("#submit-register").click(function(){
  $(".error-register").remove();

  var username = $("#new-username");
  var password = $("#new-password");
  var email = $("#new-email");
  var errors = [];
  var error = 0;

  if(username.val().length == 0) {
    errors[error] = {"key":"username", "text":"The username is required"};
    error++;
  }
  else if(username.val().length < 4 || username.val().length > 12) {
    errors[error] = {"key":"username", "text":"The username should have beteween 4 and 12 characteres"};
    error++;
  }

  if(password.val().length == 0) {
    errors[error] = {"key":"password", "text":"The password is required"};
    error++;
  }
  else if(password.val().length <= 6) {
    errors[error] = {"key":"password", "text":"The password should have at least 6 characters"};
    error++;
  }

  var regexemail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if(email.val().length == 0) {
    errors[error] = {"key":"email", "text":"The email is required"};
    error++;
  }
  else if(!regexemail.test(email.val())) {
    errors[error] = {"key":"email", "text":"The email is invalid"};
    error++;
  }

  for (var i = 0; i < errors.length; i++) {
    var msg = $("<span class='error-register'></span>").appendTo("body");
    msg.css("top", $("#new-"+errors[i].key).offset().top + 45);
    msg.text(errors[i].text);
    msg.show();
  }

  // Ajax register
  if(error == 0) {
    $.ajax({
        url: 'phpfunctions/registerfunction.php',
        type: "POST",
        data: { "username" : username.val(),
                "password" : password.val(),
                "email" : email.val()
              },
        success: function(reponse) {
          $(".nav-login").hide();
          $(".nav-loged").show();
          $("#nav-username").text(reponse);
          $("#div-register").hide();
          $("#div-welcome").show();
          $("#welcome-username").text(reponse);
        }
    });
  }
});

// Log logOut
$("#nav-logout").click(function(){
  $.ajax({
      url: 'phpfunctions/logoutfunction.php',
      type: "POST",
      success: function(reponse) {
        $(".nav-loged").hide();
        $(".nav-login").show();
        $("#nav-username").text("User");
      }
  });
});

//Game options

$(".game-time").click(function(){
  $(".game-time").hide();
  $(".game-difficulty").show();

  if($(this).text() == "Time trial") {
    $("#time-value").val(2);
  }
  else {
    $("#time-value").val(1);
  }
});
