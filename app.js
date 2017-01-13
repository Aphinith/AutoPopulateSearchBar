
$(document).ready(function() {
  $(".search-bar").keyup(function(e) {
    var inputValue = $(".search-bar-input").val().toString();
    
    // remove autopopulate div border when nothing is in search bar
    if (!inputValue) {
      $(".autopopulated-results").empty().css({"border": "0"});
    };

    function selectedTitle(title) {
      console.log('this is the selected title: ', title);
      $(".search-bar-input").val(title);
      $(".autopopulated-results").empty().css({"border": "0"});
      $.get('https://api.viki.io/v4/search.json?c='+title+'&per_page=5&with_people=true&app=100266a&t=1440586215', function(data) {
        showResults(data);
      });
    };

    // append the titles to the autopopulate div
    function appendTitles(titles) {
      $(".autopopulated-results").empty().css({"border": "1px solid black"});
      for (var i = 0; i < titles.length; i++){
        var title = titles[i];
        $(".autopopulated-results").append("<div>"+title+"</div class='testing'>");
        // highlight title upon hovering
        $(".autopopulated-results > div").addClass("hover-change");
      }
      // create onClick handler to select title
      $(".hover-change").on("click", function(event) {
        var movieTitle = event.target.innerText;
        selectedTitle(movieTitle);
      });
    };

    function showResults(data) {
      $(".search-results").empty();
      // console.log('data: ', data);
      for (var i = 0; i < data.length; i++) {
        var movie = data[i];
        // console.log('this is movie: ', movie);
        var movieTitle = movie.tt;
        var movieImage = movie.i;
        // console.log('movieTitle: ', movieTitle);
        // console.log('movieImage: ', movieImage);
        $(".search-results").append("<div>"+movieTitle+"</div>");
        $(".search-results > div").addClass("movie-title");
        $(".search-results").append("<img src="+movieImage+"height='300px' width='300px'>");
        $("img").addClass("image-file");
      }
    }

    // create get request from viki api, get titles, call function to populate titles
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