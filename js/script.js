/* global $ */

console.log("hi");

/*$('h1').click(function(){
    $('h1').css('color', 'green');
    $('h1').text('Ready to Code');
});*/
let search = $("#input").val();
let api =
  "https://api.themoviedb.org/3/search/movie?api_key=1de8557f26f4d177fcb5b21811677161&language=en-US&query=" +
  search +
  "&page=1&include_adult=false";

fetch(api)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let title = data.results[0].original_title;
    let posterPath = data.results[0].poster_path;
    let synopsis = data.results[0].overview;
    let rating = data.results[0].vote_average;
    let poster = "https://image.tmdb.org/t/p/w500" + posterPath;
  });
