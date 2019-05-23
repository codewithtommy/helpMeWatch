
// holds everything safe
  movieShowApp = {};
// API key
  movieShowApp.key = `cca8aaccc614149518ad4b0a721a135a`; 

// ajax call here
movieShowApp.getMovies = function (){

  $.ajax({
    url: 'https://api.themoviedb.org/3/movie/top_rated',
    method: 'GET',
    datatype:'json',
    data :{
      api_key: movieShowApp.key
    }
  }).then(function (results){
    console.log(results);


//     $('.result').empty();

//     let movies = results.movieChoice;

//     movieShowApp.displayMovie(movies)
  })
}

movieShowApp.getMovies()

// movieShowApp.displayMovie = function(arrayOfMovies){
//   console.log(arrayOfMovies);

// }
