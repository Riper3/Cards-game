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

  for (var i = 0; i < 40; i++) {
    $("#div-game").append("<div class='game-card'></div>");
  }
});
