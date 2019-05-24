
// Holds everything safe.
  movieShowApp = {};
// API key
  movieShowApp.key = `cca8aaccc614149518ad4b0a721a135a`; 

// AJAX call for Movies and TV shows.
movieShowApp.getMovies = function (){
  console.log(`pizza is ready`);

  // Call for MOVIES > Discover.
  $.ajax({
    url: `https://api.themoviedb.org/3/discover/movie?language=en-US&with_genres=18,35`,
    method: `GET`,
    datatype:`json`,
    data: {
      api_key: movieShowApp.key
    }
  }).then(function (movieResults){
    console.log(movieResults.results[i].genre_id[2]);

    // create a for loop to loop around the results 0-19 or 0-12 
    // for $(`movieResults.results[i].genre_id[2])`)
    // push it this into a new array
    // append from the new array to the section you want... etc
  });

  // Call for TV SHOWS > Discover
  // $.ajax({
  //   url: `https://api.themoviedb.org/3/discover/movie`,
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
$(`.start`).on(`click`, function (event) {
  // Prevents button default
  event.preventDefault();

  // Disable button to prevent multiple submits
  $(`.start`).attr(`disabled`, true);

  // Scroll to element .discover
  $(`html, body`).animate({
    scrollTop: $(`#discover`).offset().top
  }, 1000);

  // Append users with: Movie or TV Shows in the .discoverContainer section.
  $(`.formOne`).html (
    `<input type="radio" id="movies" value="movies" name="genreMain"></input>
    <label for="movies">Movies!</label>

    <input type="radio" id="tvShows" value="tvShows" name="genreMain"></input>
    <label for="tvShows">TV Shows!</label>

    <input id="secondSubmit" class="secondSubmit" type="submit" value="Next!" aria-hidden="true" title="submit" required></input>`
  )
})

$(`.formOne`).on(`submit`, function (event) {
  event.preventDefault();
  console.log(`chest test chest`);

  // Scroll to .filter section to append another set of selections.
  $(`html, body`).animate({
    scrollTop: $(`#filter`).offset().top
  }, 1000);
  
  // IF input[type="movies"] is checked append/ html _____ to .formTwo
  if ($(`#movies:checked`).val()) {
    $(`.formTwo`).html (
      `<input type="radio" id="drama" value="drama" name="genreSub"></input>
      <label for="drama">Feelin' Emotional?</label>

      <input type="radio" id="comedy" value="comedy" name="genreSub"></input>
      <label for="comedy">Need Some Laughs?</label>

      <input id="thirdSubmit" class="thirdSubmit" type="submit" value="Next!" aria-hidden="true" title="submit" required></input>`
    )
  }
})

$(`.formTwo`).on(`submit`, function (event) {
  event.preventDefault();
  console.log(`pizza is cold, put it back`);

  const movieDramaChecked = ($('#movies:checked').val() && $('#drama:checked').val());

  if (movieDramaChecked === movieDrama);
    console.log(movieDrama)
})


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


