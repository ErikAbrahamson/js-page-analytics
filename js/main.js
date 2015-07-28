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
  var $scrollPercent = ($windowTop / ($documentHeight - $windowHeight) * 100).toFixed(0);
  $('#analytics-percent').text($scrollPercent + '%');
});

// Time difference, button clicked
$('#signup').on('click', function() {
  var $clickTime = $.now();
  var $duration = (($clickTime - $startTime) / 1000).toFixed(0);
  $('#analytics-time').text($duration + 's');
});

// Time spent on site
$('#analytics-duration').on('click', function() {
  var $clickTime = $.now();
  var $duration = (($clickTime - $startTime) / 1000).toFixed(0);
  for (var counter = 0; counter < 100000; counter += $duration) {
    $('#analytics-duration').html($duration + 's');
  }
});
