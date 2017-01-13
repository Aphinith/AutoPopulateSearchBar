$(document).ready(function() {
  $(".search-bar").keyup(function(e) {
    var inputValue = $(".search-bar-input").val().toString();
    console.log('inputValue: ', inputValue);
    $(".autopopulated-results ul").empty().append("<li>"+inputValue+"</li>");
  })
})