function endGame() {
  $(".game-card").remove();
  $(".game-card-clicled").remove();
  $("#game-end").hide();
  $(".game-difficulty").hide();
  $(".game-time").show();
}

// Change div

$(".nav-link").click(function(){
  $(".main-div").hide();
  var div = $(this).attr("id").split("-")[1];
  document.title = "Cards | " + div.charAt(0).toUpperCase() + div.slice(1);
  $("#div-" + div).show();


  //Remove errors from register div
  if(div != "register") {
    $(".error-register").remove();
  }

  //Remove errors from login linkdiv
  if(div != "login") {
    $("#error-login").remove();
  }

  //Reset game
  if(div != "game") {
    endGame();
  }

  //Refresh the ranking
  if(div == "ranking") {
    $(".ranking-row").remove();
    $.ajax({
        url: 'phpfunctions/rankingfunction.php',
        type: "POST",
        data: { "refresh" : 1
              },
        success: function(reponse) {
          var ranking = $.parseJSON(reponse);

          $.each(ranking, function(index) {
            var row = $("#ranking-row").clone();
            row.removeAttr('id');
            row.addClass("ranking-row");

            row.children(".ranking-username").text(ranking[index].username);
            row.children(".ranking-difficulty").text(ranking[index].difficulty);
            row.children(".ranking-totaltime").text(ranking[index].totaltime);
            row.children(".ranking-trialtime").text(ranking[index].timetrial);

            if(index != 0) {
              row.insertAfter(".ranking-row:last");
            }
            else {
              row.insertAfter("#ranking-row");
            }
          });
        }
    });
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
  else if(password.val().length <= 5) {
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
        data: { "usern" : username.val(),
                "userp" : password.val(),
                "email" : email.val()
              },
        success: function(reponse) {
          $(".nav-login").hide();
          $("#nav-username").addClass("nav-link");
          $(".nav-loged").show();
          $("#nav-username").text(reponse);
          $("#div-register").hide();
          $("#div-welcome").show();
          $("#welcome-username").text(reponse);
        }
    });
  }
});

// Log In
$("#submit-login").click(function(){
  $("#error-login").remove();
  $.ajax({
      url: 'phpfunctions/loginfunction.php',
      type: "POST",
      data: { "username" : $("#login-username").val(),
              "password" : $("#login-password").val(),
            },
      success: function(reponse) {
        if(reponse != "error") {
          $(".nav-login").hide();
          $("#nav-username").addClass("nav-link");
          $(".nav-loged").show();
          $("#nav-username").text(reponse);
          $("#div-login").hide();
          $("#div-home").show();
        }
        else {
          var msg = $("<span id='error-login'></span>").appendTo("body");
          msg.text("Username or password wrong");
          msg.show();
        }
      }
  });
});
// Log Out
$("#nav-logout").click(function(){
  $.ajax({
      url: 'phpfunctions/logoutfunction.php',
      type: "POST",
      success: function(reponse) {
        $(".nav-loged").hide();
        $("#nav-username").removeClass("nav-link");
        $(".nav-login").show();
        $("#nav-username").text("User");
      }
  });
});
