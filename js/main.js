// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
});

$(window).scroll(function() {
  var $windowTop = $(window).scrollTop();
  var $documentHeight = $(document).height();
  var $windowHeight = $(window).height();

  $('#analytics').text((($windowHeight / $documentHeight) * 100).toFixed(0) + '%');
});


// document window / percent over window

// grab time stamp on window load. subtract time button clicked from initial time
