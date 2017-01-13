$(document).ready(function() {
  $(".search-bar").keyup(function(e) {
    var inputValue = $(".search-bar").val().toString();
    console.log('inputValue: ', inputValue);
    console.log('append here: ', $(".autopopulated-results")[0])
    $(".autopopulated-results ul").empty().append("<li>"+inputValue+"</li>");
  })
})