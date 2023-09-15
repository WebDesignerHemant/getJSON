$(document).ready(function () {
  $("#getAdvice").on('click', function() {
    $.getJSON("https://api.adviceslip.com/advice", function(data) {
        $('.advice').text(data.slip.advice);
    })
    .fail(function() {
        console.log('failed')
    });
});
});