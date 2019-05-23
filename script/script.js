
// Holds everything safe.
  movieShowApp = {};
// API key
  movieShowApp.key = `cca8aaccc614149518ad4b0a721a135a`; 

// AJAX call for Movies and TV shows.
movieShowApp.getMovies = function (){
  console.log(`pizza is ready`);

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

  $.ajax({
    url: `https://api.themoviedb.org/3/tv/top_rated`,
    method: `GET`,
    datatype: `json`,
    data: {
      api_key: movieShowApp.key
    }
  }).then(function (tvResults){
    console.log(tvResults);
  })
}

movieShowApp.getMovies()

// movieShowApp.displayMovie = function(arrayOfMovies){
//   console.log(arrayOfMovies);

// }


