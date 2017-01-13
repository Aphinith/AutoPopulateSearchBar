
$(document).ready(function() {
  $(".search-bar").keyup(function(e) {
    var inputValue = $(".search-bar-input").val().toString();

    console.log('this is inputValue: ', inputValue);
    
    if (!inputValue) {
      $(".autopopulated-results").empty().css({"border": "0"});
    };

    function appendTitles(titles) {
      // console.log('this are the new titles: ', titles);
      $(".autopopulated-results").empty().css({"border": "1px solid black"});
      for (var i = 0; i < titles.length; i++){
        var title = titles[i];
        console.log('this is title: ', title );
        $(".autopopulated-results").append("<div>"+title+"</div class='testing'>")
      }
    };

    $.get('https://api.viki.io/v4/search.json?c='+inputValue+'&per_page=5&with_people=true&app=100266a&t=1440586215', function(data) {
      var titles = []
      for (var i = 0; i < 5; i++) {
        var title = data[i].tt;
        titles.push(title);
      };
      appendTitles(titles);
    });
  })
})

// https://api.viki.io/v4/search.json?c=boys&per_page=5&with_people=true&app=100266a&t=1440586215