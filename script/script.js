
// holds everything safe.
movieShowApp = {};

// API key
movieShowApp.key = `cca8aaccc614149518ad4b0a721a135a`; 

// global variable to for randomization for movie (drama/ comedy)
movieShowApp.randomMovie = (movieDramaAll) => {
  randomM = movieDramaAll[Math.floor(Math.random() * movieDramaAll.length)];
}

movieShowApp.randomMovie = (movieComedyAll) => {
  randomM = movieComedyAll[Math.floor(Math.random() * movieComedyAll.length)];
}

// global variable to for randomization for tv shows (drama/ comedy)
movieShowApp.randomTv = (tvDramaAll) =>{
  randomT = tvDramaAll[Math.floor(Math.random() * tvDramaAll.length)];
}

movieShowApp.randomTv = (tvComedyAll) => {
  randomT = tvComedyAll[Math.floor(Math.random() * tvComedyAll.length)];
}

// AJAX call for Movies and TV shows.
movieShowApp.getMovies = function (){
  // call for Movies API with drama.
  $.ajax({
    url: `https://api.themoviedb.org/3/discover/movie?language=en-US&with_genres=18`,
    method: `GET`,
    datatype:`json`,
    data: {
      api_key: movieShowApp.key
    }

    }).then(function (movieResults){

      const movieDramaAll = movieResults.results;
      // randomize our movie api before displaying it, so we have a function created above to randomize the movie into this, then call it below
      movieShowApp.randomMovie(movieDramaAll)
  });

  // call for Movies API with comedy
  $.ajax({
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

  // call for TV Shows API with drama.
  $.ajax({
    url: `https://api.themoviedb.org/3/discover/tv?language=en-US&sort_by=popularity.desc&page=1&with_genres=18`,
    method: `GET`,
    datatype: `json`,
    data: {
      api_key: movieShowApp.key
    }
  }).then(function (tvResults) {
    const tvDramaAll = tvResults.results;
    movieShowApp.randomTv(tvDramaAll)
    });

  // call for TV Shows API with comedy.
  $.ajax({
    url: `https://api.themoviedb.org/3/discover/tv?language=en-US&sort_by=popularity.desc&page=1&with_genres=35`,
    method: `GET`,
    datatype: `json`,
    data: {
      api_key: movieShowApp.key
    }
  }).then(function (tvResults) {
    const tvComedyAll = tvResults.results;
    movieShowApp.randomTv(tvComedyAll)
  });
}

// HEADER: start button on submit > scroll down to discover section.
// resets quiz upon click on the reset button
$(`#reset`).on(`click`,function(event){
  location.reload();
});

// hide reset button after clicking on it
$('#reset').css(`display`,'none');

// SECTION: .start function
$(`.start`).on(`click`, function (event) {
  // prevents button defaults
  event.preventDefault();

  // disable start button to prevent multiple clicks/ submits and also hide it after clicking it so the reset button can show up in it's spot.
  $(`.start`).attr(`disabled`, true);
  $(`.start`).css(`display`, 'none');
  $(`.reset`).css(`display`,'initial');

  // scroll to element .discover
  $(`html, body`).animate({
    scrollTop: $(`#discover`).offset().top
  }, 1000);

  // append users with: Movie or TV Shows in the .discoverContainer section.
  $(`.formOne`).html (
    `
    <h2 class="animated fadeInDown">What Would It Be?</h2>
    <div class = "formWrapper animated fadeIn">
      <input type="radio" id="movies" value="movies" name="genreMain"></input>
      <label for="movies">Movies!</label>

      <input type="radio" id="tvShows" value="tvShows" name="genreMain"></input>
      <label for="tvShows">TV Shows!</label>

      <input id="secondSubmit" class="secondSubmit" type="submit" value="Next!" aria-hidden="true" title="Submit" required></input>
    </div>`
  );
})

// SECTION: under .discover to .formOne
$(`.formOne`).on(`submit`, function (event) {
  event.preventDefault();

  $(`input[type="radio"]`).attr(`required`, `true`);
  $(`html, body`).animate({
    scrollTop: $(`#filter`).offset().top
  }, 1000);
  
  // IF input[type="movies"] is checked append/ html to .formTwo
  if ($(`#movies:checked`).val()) {
    $(`.formTwo`).html (
      `
      <h2 class="animated fadeInDown">What Do You Feel Like?</h2>
      <div class = "formWrapper animated fadeIn">
      <input type="radio" id="drama" value="drama" name="genreSub"></input>
      <label for="drama">Feelin' Emotional?</label>

      <input type="radio" id="comedy" value="comedy" name="genreSub"></input>
      <label for="comedy">Need Some Laughs?</label>

      <input id="thirdSubmit" class="thirdSubmit" type="submit" value="Next!" aria-hidden="true" title="Submit" required></input>
      </div>`
    );
    // make .formOne disappear after making selecting a choice.
    $(`.formOne`).css(`display`, `none`);

  } else if ($(`#tvShows:checked`).val()) {
    $(`.formTwo`).html (
      `
      <h2 class=""animated fadeInDown>What's going to be?</h2>
      <div class = "formWrapper animated fadeIn">
      <input type="radio" id="drama" value="drama" name="genreSub"></input>
      <label for="drama">Need them Feels?</label>

      <input type="radio" id="comedy" value="comedy" name="genreSub"></input>
      <label for="comedy">Giggles?</label>

      <input id="thirdSubmit" class="thirdSubmit" type="submit" value="Next!" aria-hidden="true" title="submit" required></input>
      </div>`
    );
    $(`.formOne`).css(`display`, `none`);  
  };
})

// SECTION: under .discover to .formTwo
$(`.formTwo`).on(`submit`, function (event) {
  event.preventDefault();
  
  $(`input[type="radio"]`).attr(`required`, `true`);
  $(`html, body`).animate({
    scrollTop: $(`#result`).offset().top
  }, 1000);

  // variable created for MOVIES with sub-choices: Drama or Comedy.
  const movieDramaChecked = ($(`#movies:checked`).val() && $(`#drama:checked`).val());
  const movieComedyChecked = ($(`#movies:checked`).val() && $(`#comedy:checked`).val());

  // tv variables created for Drama/comedy
  const tvDramaChecked = ($(`#tvShows:checked`).val() && $(`#drama:checked`).val());
  const tvComedyChecked = ($(`#tvShows:checked`).val() && $(`#comedy:checked`).val());

  // IF Movies && Drama are checked OR Movies && Comedy are checked... append the following under:
  if (movieDramaChecked) {
    // hide .formTwo after making appropriate selections.
    $(`.formTwo`).css(`display`, `none`);
    
    // variable created to append movie src/ url AND alt text together so we can call for both of them.
    const moviePoster = $(`<img>`)
    .attr(`src`,`https://image.tmdb.org/t/p/w500`+`${randomM.poster_path}`)
    .attr(`alt`,randomM.title)

    // append all the information related to the movie/tv show  to .resultText.
    $(`.resultText`).html(
      `<div class="resultContent animated fadeInDown">
        <h3>${randomM.title}</h3>
        <h4>${randomM.release_date}</h4>
        <h4>${randomM.vote_average} <i class="far fa-star"></i></h4>
        <h5>Overview</h5>
        <p>${randomM.overview}</p>
      </div>`
    );

    // append all image related movie/ tv shows to their respective divs.
    $(`.resultImg`).append(moviePoster).addClass(`animated fadeInDown`);
    $(`.result`).css(`background-image`, `url(https://image.tmdb.org/t/p/original${randomM.backdrop_path})`);

  } else if(movieComedyChecked){
    $(`.formTwo`).css(`display`, `none`);
    
    const moviePoster = $(`<img>`).attr(`src`, `https://image.tmdb.org/t/p/w500`+`${randomM.poster_path}`).attr(`alt`,randomM.title)

    $(`.resultText`).html(
      `<div class="resultContent animated fadeInDown">
        <h3>${randomM.title}</h3>
        <h4>${randomM.release_date}</h4>
        <h4>${randomM.vote_average} <i class="far fa-star"></i></h4>
        <h5>Overview</h5>
        <p>${randomM.overview}</p>
      </div>`
    );
    
    $(`.resultImg`).append(moviePoster).addClass(`animated fadeInDown`);
    $(`.result`).css(`background-image`, `url(https://image.tmdb.org/t/p/original${randomM.backdrop_path})`);
  };

  if(tvDramaChecked) {
    $(`.formTwo`).css(`display`, `none`);
    
    const tvPoster = $(`<img>`).attr(`src`, `https://image.tmdb.org/t/p/w500` + `${randomT.poster_path}`).attr(`alt`,randomT.name)

    $(`.resultText`).html(
      `<div class="resultContent animated fadeInDown">
        <h3>${randomT.name}</h3>
        <h4>${randomT.first_air_date}</h4>
        <h4>${randomT.vote_average} <i class="far fa-star"></i></h4>
        <h5>Overview</h5>
        <p>${randomT.overview}</p>
      </div>`
    );
    
    $(`.resultImg`).append(tvPoster).addClass(`animated fadeInDown`);
    $(`.result`).css(`background-image`, `url(https://image.tmdb.org/t/p/original${randomT.backdrop_path})`);

  } else if (tvComedyChecked) {
    $(`.formTwo`).css(`display`, `none`);

    const tvPoster = $(`<img>`).attr(`src`, `https://image.tmdb.org/t/p/w500` + `${randomT.poster_path}`).attr(`alt`, randomT.name)

    $(`.resultText`).html(
      `<div class="resultContent animated fadeInDown">
        <h3>${randomT.name}</h3>
        <h4>${randomT.first_air_date}</h4>
        <h4>${randomT.vote_average} <i class="far fa-star"></i></h4>
        <h5>Overview</h5>
        <p>${randomT.overview}</p>
      </div>`
    );

    $(`.resultImg`).append(tvPoster).addClass(`animated fadeInDown`);
    $(`.result`).css(`background-image`, `url(https://image.tmdb.org/t/p/original${randomT.backdrop_path})`);
  };

  const reset = $(`.reset`);
  $(reset).on('click', function (event) {
    event.preventDefault();
  });
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


