
// holds everything safe.
  movieShowApp = {};

// API key
  movieShowApp.key = `cca8aaccc614149518ad4b0a721a135a`; 

  // randomize the array, need to randomize the array here.
  movieShowApp.randomMovie = (test) => {
    randomM = test[Math.floor(Math.random() * test.length)];
    console.log(randomM);
  }

// AJAX call for Movies and TV shows.
movieShowApp.getMovies = function (){
  console.log(`pizza is ready`);

  // call for Movies API.
  $.ajax({
    // might have to change the url to just '18' for drama and then make a seperate call for '35', but let's see what we get first
    url: `https://api.themoviedb.org/3/discover/movie?language=en-US&with_genres=18,35`,
    method: `GET`,
    datatype:`json`,
    data: {
      api_key: movieShowApp.key
    }
  }).then(function (movieResults){
    // console.log(movieResults);

    // we make movieResults.results into a variable 'test'. we can change the name later
    const test = movieResults.results;

    // we'll get this an array now, since we get the data from the ajax call as an object
    // console.log(test)

    // we then need to randomize our movie before the display, so we have a function created above to randomize the movie into this, then call it below
    movieShowApp.randomMovie(test)



    // dont' need to loop here i think, we can just random through it
    // console.log(movieResults.results[i].genre_id[2]);

    // create a for loop to loop around the results index 0-19 or 0-20 

  //  for(i = 0; i < movieResults.length; i++){

  //    le movieResults.result[i].genre_id[2]

  //   }

  // movieDramaChecked === newArray
    // for $(`movieResults.results[i].genre_id[2])`)
    // push it this into a new array
    // append from the new array to the section you want... etc
  });

// deleted tvShows call for ajax for now to make things less messy... can copy paste then re-adjust from our first call.
}

// HEADER: start button on submit > scroll down to discover section.
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

// SECTION: under .discover to .formOne
$(`.formOne`).on(`submit`, function (event) {
  event.preventDefault();
  console.log(`chest test chest`);

  // disabled "submit" button in the first set of choice selections.
  $(`.secondSubmit`).attr(`disabled`, true);
  // disabled "input[type="radio"] reselection in the first set of choice selections
  $(`input[type="radio"]`).attr(`disabled`, true);
  // scroll to .filter section to append another set of selections.
  $(`html, body`).animate({
    scrollTop: $(`#filter`).offset().top
  }, 1000);
  
  // IF input[type="movies"] is checked append/ html _____ to .formTwo
  if ($(`#movies:checked`).val()) {
    $(`.formTwo`).html (
      // note: see if we can create a varible for these appended buttons to make it more DRY or re-factored.
      `<input type="radio" id="drama" value="drama" name="genreSub"></input>
      <label for="drama">Feelin' Emotional?</label>

      <input type="radio" id="comedy" value="comedy" name="genreSub"></input>
      <label for="comedy">Need Some Laughs?</label>

      <input id="thirdSubmit" class="thirdSubmit" type="submit" value="Next!" aria-hidden="true" title="submit" required></input>`
    );
  } else if ($(`#tvShows:checked`).val()) {
    $(`.formTwo`).html (
      `<input type="radio" id="drama" value="drama" name="genreSub"></input>
      <label for="drama">Feelin' Emotional?</label>

      <input type="radio" id="comedy" value="comedy" name="genreSub"></input>
      <label for="comedy">Need Some Laughs?</label>

      <input id="thirdSubmit" class="thirdSubmit" type="submit" value="Next!" aria-hidden="true" title="submit" required></input>`
    );
  };
})

// SECTION: under .discover to .formTwo
$(`.formTwo`).on(`submit`, function (event) {
  event.preventDefault();
  console.log(`need to append shit here after selecting and submitting`);

  const movieDramaChecked = ($('#movies:checked').val() && $('#drama:checked').val());

  // if (movieDramaChecked) {
  //   for (let i = 0; i < test.length; i++) {
  //     if(test[i].)
  //   }
  // }
})


// movieShowApp.displayMovie = function(arrayOfMovies){
//   console.log(arrayOfMovies);
// }

// init method holds anything that needs to be run at load times + even listeners.
movieShowApp.init = function (){
  movieShowApp.getMovies()
}

// document READY. Wait till everything is loaded successfully.
$(function () {
  // start/ begin movieShowApp
  movieShowApp.init();
})


