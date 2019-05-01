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

  var z = 0;

  for (var i = 0; i < 40; i++) {
    $("#div-game").append("<div class='game-card' id=card"+i+"></div>");

    images[i] = "assets/images/cats/cat"+z+".jpg";
    z++;

    if(z >= 10) {
      z = 0;
    }
  }
});

$("div").on("click", ".game-card", function(){
  var number = $(this).attr('id').match(/\d+/)[0];

  var image = '"'+images[number]+'"';
  $(this).css("background-image", "url("+image+")");

  var clicked = $(".game-card[style*='background-image: url("+image+")']");
  if(clicked.length === 2) {
    clicked.css("background-image", "");
    clicked.css('visibility', 'hidden');
  }
});
