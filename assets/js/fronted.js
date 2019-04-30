// Change div

$(".nav-link").click(function(){
  $(".main-div").hide();
  document.title = "Cards | "+$(this).text();
  var linkdiv = "#div-"+$(this).text().toLowerCase();
  $(linkdiv).show();
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

// Ajax Register

$("#submit-register").click(function(){
  $.ajax({
      url: 'phpfunctions/registerfunction.php',
      type: "POST",
      data: { "username" : $("#new-username").val(),
              "password" : $("#new-password").val(),
              "email" : $("#new-email").val()
            },
      success: function(reponse) {
        console.log(reponse);
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
