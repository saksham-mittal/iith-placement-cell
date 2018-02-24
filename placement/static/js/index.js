$('.link-panel').hover(function() {
  $(this).css('background-color', 'rgba(255, 58, 58, 0.4)');
  $(this).children("a").children("div").css('background-color', '#f5f5f5');
  $(this).children("a").children("p").css('color', '#f5f5f5');
  $(this).children("a").children("div").children("i").css('color', 'rgba(255, 58, 58, 0.9)');
}, function() {
  $(this).css('background-color', 'transparent');
  $(this).children("a").children("div").css('background-color', 'rgba(1, 1, 1, 0.7)');
  $(this).children("a").children("p").css('color', '#a8a8a8');
  $(this).children("a").children("div").children("i").css('color', '#a8a8a8');
});

$('.read-more').click(function() {
  var buttonValue = $(this).val();
  $(this).siblings().html(buttonValue);
  $(this).css('display', 'none');
});

$('.button-collapse').sideNav();

$('.parallax').parallaxBackground();
