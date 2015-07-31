$(document).on('ready', function() {

  // initial time
  var $startTime = $.now();

  // console.log('Analytics script loaded');

  // *** Percentage scrolled *** //
  $(window).scroll(function() {
    // initial value of page scroll
    var $windowTop = $(window).scrollTop();
    // full HTML document height
    var $documentHeight = $(document).height();
    // just viewable window height
    var $windowHeight = $(window).height();
    // get scroll percent
    var $scrollPercent = ($windowTop / ($documentHeight - $windowHeight) * 100).toFixed(0);
    // if scrollpercent > max then redfine scroll percent
    $('#analytics-percent').text($scrollPercent + '%');
  });

  // *** Time difference, sign up button clicked *** //
  $('#signup').on('click', function() {
    // time the button is clicked
    var $clickTime = $.now();
    // subtract button click time from subtract time
    var $duration = (($clickTime - $startTime) / 1000).toFixed(0);
      if ($duration <= 60) {
        $('#analytics-duration').html($duration + 's');
      } else {
        $('#analytics-duration').html(($duration / 60).toFixed(0) + 'm');
      }
    // if $duration is null/undefined then calculate duration
    $('#analytics-time').text($duration + 's');
  });

  // Time spent on site
  $('#analytics-duration').on('click', function() {
    // time the button is clicked
    var $clickTime = $.now();
    // subtract button click time from subtract time
    var $duration = (($clickTime - $startTime) / 1000).toFixed(0);
    // update $duration every second
    setInterval(function() {
      if ($duration <= 60) {
        $('#analytics-duration').html(++$duration + 's');
      } else {
        $('#analytics-duration').html((++$duration / 60).toFixed(0) + 'm');
      }
    }, 1000);
  });

});
