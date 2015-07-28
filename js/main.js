// add scripts
var $startTime = null;
$(document).on('ready', function() {
  $startTime = $.now();
  console.log('sanity check!');
});
// Percentage scrolled
$(window).scroll(function() {
  var $windowTop = $(window).scrollTop();
  var $documentHeight = $(document).height();
  var $windowHeight = $(window).height();

  $('#analytics-percent').text(($windowTop /($windowHeight - $documentHeight) * -100).toFixed(0) + '%');
});
// Time difference, button clicked

$('#signup').on('click', function() {
  var $clickTime = $.now();
  var $duration = (($clickTime - $startTime) / 1000).toFixed(0);
  $('#analytics-time').text($duration + 's');
});
