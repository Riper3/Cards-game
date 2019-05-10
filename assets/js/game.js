var images = [];
var timetrial = 0;
var difficulty = "Normal";
var totaltime = 0;
var timeinterval;
//Game options

$(".game-time").click(function(){
  $(".game-time").hide();
  $(".game-difficulty").show();

  if($(this).text() == "Time trial") {
    timetrial = 1;
  }
  else {
    timetrial = 0;
  }
});

$(".game-difficulty").click(function(){
  $(".game-difficulty").hide();

  if($(this).text() == "Hard") {
    difficulty = "Hard";
  }
  else if($(this).text() == "Normal") {
    difficulty = "Normal";
  }
  else {
    difficulty = "Easy";
  }

  // Cards generator
  var z = 0;

  for (var i = 0; i < 40; i++) {
    $("#div-game").append("<div class='game-card' id=card"+i+"></div>");

    images[i] = "assets/images/cats/cat"+z+".jpg";
    z++;

    if(z >= 10) {
      z = 0;
    }
  }

  // Mix cards
  for (var i = 0; i < 100; i++) {
    var firstnumber = Math.floor(Math.random() * 39);
    var secondnumber = Math.floor(Math.random() * 39);

    if(firstnumber != secondnumber) {
      $("#card"+firstnumber).before($("#card"+secondnumber));
    }
  }

  timeinterval = setInterval(function () {
  ++totaltime;
  }, 1000);
});

// Game
var clicksnumber = 0;
var firstclicked;

$("div").on("click", ".game-card", function(){
  ++clicksnumber;

  if(clicksnumber == 1) {
    firstclicked = $(this);
  }

  $(".game-card").css("pointer-events", "none");

  // Get the number by id
  var number = $(this).attr('id').match(/\d+/)[0];
  var image = '"'+images[number]+'"';

  $(this).fadeTo("fast", 0, function(){
    $(this).css("background-image", "url("+image+")");
    $(this).fadeTo("fast", 1, function(){

      // This is because you can choose the time with 1 card
      if(clicksnumber == 2) {
        var time = 1000;
      }
      else {
        var time = 0;
      }

      // Time to watch the cards
      setTimeout(function(){
        var clicked = $(".game-card[style*='background-image: url("+image+")']");
        if(clicked.length == 2 && clicksnumber == 2) {
          clicked.fadeTo("fast", 0, function(){
            clicked.css("background-image", "");
            clicked.addClass('game-card-clicled').removeClass('game-card');

            // Win game
            if($(".game-card-clicled").length == 2) {
              clearInterval(timeinterval);
              $("#game-end-time").text("Time: "+totaltime+"s");
              $("#game-end-user").text($("#nav-username").text());
              $("#game-end-difficulty").text("Difficulty: "+difficulty);
              $(".game-card-clicled").remove();
              $("#game-end").fadeIn("fast");
            }
          });
          clicksnumber = 0;
        }
        else if(clicksnumber == 2) {
          clicked.css("background-image", "url('assets/images/card.png')");
          firstclicked.css("background-image", "url('assets/images/card.png')");
          clicksnumber = 0;
        }

        $(".game-card").css("pointer-events", "auto");
      }, time);
    });
  });
});

// End options
$("#game-end-nots").click(function(){
  endGame();
});

$("#game-end-save").click(function(){
  $.ajax({
      url: 'phpfunctions/saverecordfunction.php',
      type: "POST",
      data: { "difficulty" : difficulty,
              "timetrial" : timetrial,
              "totaltime" : totaltime
            },
      success: function(reponse) {
        endGame();
      }
  });
});
