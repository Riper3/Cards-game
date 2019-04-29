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
