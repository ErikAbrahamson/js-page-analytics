$(document).on('ready', function() {
  var start = $.now();
  var percentBtn = $('#analytics-percent');
  var durationBtn = $('#analytics-duration');
  var clickBtn = $('#analytics-time');
  var modalBtn = $('#analytics-modal');
  $(window).scroll(function() {
    percentScrolled = ($(window).scrollTop() / ($(document).height() - $(window).height()) * 100).toFixed(0);
    percentBtn.text(percentScrolled + '%');
  });
  durationBtn.one('click',function() {
    var duration = (($.now() - start) / 1000).toFixed(0);
    setInterval(function() {
      if (duration < 60) {
        durationBtn.html(++duration + 's');
      } else {
        durationBtn.html((++duration / 60).toFixed(0) + 'm');
      }
    }, 1000 );
  });
  modalBtn.on('click', function() {
    console.log('ayyyy');
    $('#modal').toggleClass('show-modal');
    modalBtn.css('z-index','9');
  });
});
