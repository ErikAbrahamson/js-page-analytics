$(document).on('ready', function() {
  $startTime = $.now();
  console.log('Analytics script loaded');
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
      if ($duration <= 60) {
        $('#analytics-duration').html($duration + 's');
      } else {
        $('#analytics-duration').html(($duration / 60).toFixed(0) + 'm');
      }
    $('#analytics-time').text($duration + 's');
  });

  // Time spent on site
  $('#analytics-duration').on('click', function() {
    var $clickTime = $.now();
    var $duration = (($clickTime - $startTime) / 1000).toFixed(0);
    setInterval(function() {
      if ($duration <= 60) {
        $('#analytics-duration').html(++$duration + 's');
      } else {
        $('#analytics-duration').html((++$duration / 60).toFixed(0) + 'm');
      }
    }, 1000);
  });
});
