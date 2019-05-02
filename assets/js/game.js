var images = [];

$(".game-difficulty").click(function(){
  $(".game-difficulty").hide();

  if($(this).text() == "Hard") {
    var hard = 3;
  }
  else if($(this).text() == "Normal") {
    var hard = 2;
  }
  else {
    var hard = 1;
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
  for (var i = 0; i < 40; i++) {
    var firstnumber = Math.floor(Math.random() * 39);
    var secondnumber = Math.floor(Math.random() * 39);

    if(firstnumber != secondnumber) {
      $("#card"+firstnumber).before($("#card"+secondnumber));
    }
  }
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
