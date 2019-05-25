
// holds everything safe.
movieShowApp = {};

// API key
movieShowApp.key = `cca8aaccc614149518ad4b0a721a135a`; 
// randomize movies*********
// randomize the array, need to randomize the array here.
movieShowApp.randomMovie = (movieDramaAll) => {
  randomM = movieDramaAll[Math.floor(Math.random() * movieDramaAll.length)];
}
// for comedy
movieShowApp.randomMovie = (movieComedyAll) => {
  randomM = movieComedyAll[Math.floor(Math.random() * movieComedyAll.length)];
}
// randomize tv shows ************
// randomize drama
movieShowApp.randomTv = (tvDramaAll) =>{
  randomT = tvDramaAll[Math.floor(Math.random() * tvDramaAll.length)];
  // console.log(randomT);
}
// randomize comedy
movieShowApp.randomTv = (tvComedyAll) => {
  randomT = tvComedyAll[Math.floor(Math.random() * tvComedyAll.length)];
  // console.log(randomT);
}

// AJAX call for Movies and TV shows.
movieShowApp.getMovies = function (){
  // call for Movies API.
  $.ajax({
    // might have to change the url to just '18' for drama and then make a seperate call for '35', but let's see what we get first
    url: `https://api.themoviedb.org/3/discover/movie?language=en-US&with_genres=18`,
    method: `GET`,
    datatype:`json`,
    data: {
      api_key: movieShowApp.key
    }
    }).then(function (movieResults){
    // console.log(movieResults);
    // we make movieResults.results into a variable 'test'. we can change the name later
      const movieDramaAll = movieResults.results;
      // console.log(movieDramaAll);
      // we'll get this an array now, since we get the data from the ajax call as an object
      // console.log(test)
      // we then need to randomize our movie before the display, so we have a function created above to randomize the movie into this, then call it below
      movieShowApp.randomMovie(movieDramaAll)
  });
  $.ajax({
    // might have to change the url to just '18' for drama and then make a seperate call for '35', but let's see what we get first
    url: `https://api.themoviedb.org/3/discover/movie?language=en-US&with_genres=35`,
    method: `GET`,
    datatype: `json`,
    data: {
      api_key: movieShowApp.key
    }
  }).then(function (movieResults) {
      const movieComedyAll = movieResults.results;
      movieShowApp.randomMovie(movieComedyAll)
  });
// end of movie calls ***************************************************************
// start of tv calls *****************************************************************
  $.ajax({
    // might have to change the url to just '18' for drama and then make a seperate call for '35', but let's see what we get first
    url: ` https://api.themoviedb.org/3/discover/tv?language=en-US&sort_by=popularity.desc&page=1&with_genres=18`,
    method: `GET`,
    datatype: `json`,
    data: {
      api_key: movieShowApp.key
    }
  }).then(function (tvResults) {
    // console.log(movieResults);
    // we make movieResults.results into a variable 'test'. we can change the name later
    const tvDramaAll = tvResults.results;
    console.log(tvDramaAll);
    // we'll get this an array now, since we get the data from the ajax call as an object
    // console.log(test)
    // we then need to randomize our movie before the display, so we have a function created above to randomize the movie into this, then call it below
    movieShowApp.randomTv(tvDramaAll)
    });
  $.ajax({
    // might have to change the url to just '18' for drama and then make a seperate call for '35', but let's see what we get first
    url: ` https://api.themoviedb.org/3/discover/tv?language=en-US&sort_by=popularity.desc&page=1&with_genres=35`,
    method: `GET`,
    datatype: `json`,
    data: {
      api_key: movieShowApp.key
    }
  }).then(function (tvResults) {
    // console.log(movieResults);
    // we make movieResults.results into a variable 'test'. we can change the name later
    const tvComedyAll = tvResults.results;
    console.log(tvComedyAll);
    // we'll get this an array now, since we get the data from the ajax call as an object
    // console.log(test)
    // we then need to randomize our movie before the display, so we have a function created above to randomize the movie into this, then call it below
    movieShowApp.randomTv(tvComedyAll)
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
    `
    <h2>Please Choose :(</h2>
    <div class = "formWrapper">
      <input type="radio" id="movies" value="movies" name="genreMain"></input>
      <label for="movies">Movies!</label>

      <input type="radio" id="tvShows" value="tvShows" name="genreMain"></input>
      <label for="tvShows">TV Shows!</label>

      <input id="secondSubmit" class="secondSubmit" type="submit" value="Next!" aria-hidden="true" title="Submit" required></input>
    </div>`
  )
})

// SECTION: under .discover to .formOne
$(`.formOne`).on(`submit`, function (event) {
  event.preventDefault();
  // disabled "submit" button in the first set of choice selections.
  // $(`.secondSubmit`).attr(`disabled`, true);
  // disabled "input[type="radio"] reselection in the first set of choice selections
  // $(`input[type="radio"]`).attr(`disabled`, true);
  // scroll to .filter section to append another set of selections.
  $(`html, body`).animate({
    scrollTop: $(`#filter`).offset().top
  }, 1000);
  
  
  // IF input[type="movies"] is checked append/ html _____ to .formTwo
  if ($(`#movies:checked`).val()) {
    $(`.formTwo`).html (
      // note: see if we can create a varible for these appended buttons to make it more DRY or re-factored.
      `
      <h2>What do you feel like?</h2>
      <div class = "formWrapper">
      <input type="radio" id="drama" value="drama" name="genreSub"></input>
      <label for="drama">Feelin' Emotional?</label>
      <input type="radio" id="comedy" value="comedy" name="genreSub"></input>
      <label for="comedy">Need Some Laughs?</label>
      <input id="thirdSubmit" class="thirdSubmit" type="submit" value="Next!" aria-hidden="true" title="Submit" required></input>
      </div>`
    );
    $('.formOne').css('display', 'none');
  } else if ($(`#tvShows:checked`).val()) {
    $(`.formTwo`).html (
      `
      <h2>What's going to be?</h2>
      <div class = "formWrapper">
      <input type="radio" id="drama" value="drama" name="genreSub"></input>
      <label for="drama">Feelin' Emotional?</label>

      <input type="radio" id="comedy" value="comedy" name="genreSub"></input>
      <label for="comedy">Need Some Laughs?</label>

      <input id="thirdSubmit" class="thirdSubmit" type="submit" value="Next!" aria-hidden="true" title="submit" required></input>
      </div>`
    );
    $('.formOne').css('display', 'none');
      
  }else{
    alert(`Pssst! You need to pick!`);
  }
})
// SECTION: under .discover to .formTwo
$(`.formTwo`).on(`submit`, function (event) {
  event.preventDefault();
  // variable created for MOVIES with sub-choices: Drama or Comedy.
  const movieDramaChecked = ($('#movies:checked').val() && $('#drama:checked').val());
  const movieComedyChecked = ($('#movies:checked').val() && $('#comedy:checked').val());
  // tv variables created for Drama/comedy
  const tvDramaChecked = ($('#tvShows:checked').val() && $('#drama:checked').val());
  const tvComedyChecked = ($('#tvShows:checked').val() && $('#comedy:checked').val());

  // IF Movies && Drama are checked OR Movies && Comedy are checked... append...
  if (movieDramaChecked) {
      const moviePoster = $(`<img>`).attr('src', 'https://image.tmdb.org/t/p/w500'+`${randomM.poster_path}`).attr('alt',randomM.title)
    $(`.resultContainer`).html(
      `<div class="resultContent">
        <h2>${randomM.title}</h2>
        <h3>${randomM.overview}</h3>
      </div>`
    )
      $(`.resultContainer`).append(moviePoster);

  } else if(movieComedyChecked){
      const moviePoster = $(`<img>`).attr('src', 'https://image.tmdb.org/t/p/w500' + `${randomM.poster_path}`).attr('alt',randomM.title)
    $(`.resultContainer`).html(
      `<div class="resultContent">
        <h2>${randomM.title}</h2>
        <h3>${randomM.overview}</h3>
      </div>`
    ) 
      $(`.resultContainer`).append(moviePoster);
  };

  
  if(tvDramaChecked){
    // hides selections
    $('.formTwo').css('display', 'none');
    
    const tvPoster = $(`<img>`).attr('src', 'https://image.tmdb.org/t/p/w500' + `${randomT.poster_path}`).attr('alt',randomT.name)
    $(`.resultContainer`).html(
      `<div class="resultContent">
        <h2>${randomT.name}</h2>
        <h3>${randomT.overview}</h3>
      </div>`
    )
      $(`.resultContainer`).append(tvPoster);

  } else if (tvComedyChecked) {
    $('.formTwo').css('display', 'none');

    const tvPoster = $(`<img>`).attr('src', 'https://image.tmdb.org/t/p/w500' + `${randomT.poster_path}`).attr('alt', randomT.name)
    $(`.resultText`).html(
      `<div class="resultContent">
      <h2>${randomT.name}</h2>
      <h3>${randomT.overview}</h3>
      </div>`
    )
    $(`.resultImg`).append(tvPoster);
  };
})

// init method holds anything that needs to be run at load times + even listeners.
movieShowApp.init = function (){
  movieShowApp.getMovies()
}

// document READY. Wait till everything is loaded successfully.
$(function () {
  // start/ begin movieShowApp
  movieShowApp.init();
})


