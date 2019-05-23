
// Holds everything safe.
  movieShowApp = {};
// API key
  movieShowApp.key = `cca8aaccc614149518ad4b0a721a135a`; 

// AJAX call for Movies and TV shows.
movieShowApp.getMovies = function (){
  console.log(`pizza is ready`);

  // Call for MOVIES > Top Rated.
  $.ajax({
    url: `https://api.themoviedb.org/3/movie/top_rated`,
    method: `GET`,
    datatype:`json`,
    data: {
      api_key: movieShowApp.key
    }
  }).then(function (movieResults){
    console.log(movieResults);


//     $('.result').empty();

//     let movies = results.movieChoice;

//     movieShowApp.displayMovie(movies)
  })

  // Call for TV SHOWS > Top Rated.
  // $.ajax({
  //   url: `https://api.themoviedb.org/3/tv/top_rated`,
  //   method: `GET`,
  //   datatype: `json`,
  //   data: {
  //     api_key: movieShowApp.key
  //   }
  // }).then(function (tvResults){
  //   console.log(tvResults);
  // })
}

// Start button on submit > scroll down to discover section.
$(`.start`).on(`submit`, function (event) {
  // Prevents button default
  event.preventDefault();
  // Scroll to element .discover
  $(`html, body`).animate({
    scrollTop: $(`#discover`).offset().top
  }, 1000);
})

// Provide users with choices: Movie or TV Shows
$(`.discoverContainer`).html (
  <div class="movies">
    <h2>Movies</h2>
  </div>
  <div class="tvShows">
    <h2>TV Shows</h2>
  </div>
)

movieShowApp.displayMovie = function(arrayOfMovies){
  console.log(arrayOfMovies);

}

// Init method holds anything that needs to be run at load times + even listeners.
movieShowApp.init = function (){

  movieShowApp.getMovies()
}

// Document READY. Wait till everything is loaded successfully.
$(function () {
  // Start/ begin movieShowApp
  movieShowApp.init();
})


