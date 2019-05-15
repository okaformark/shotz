import moviesData from '../../helpers/data/moviesData';
import './movies.scss';
import util from '../../helpers/util';

let moviesArray = [];
const domStringBuilder = (arrayOfMovie) => {
  let domString = '';
  domString += '<div class = "row">';
  arrayOfMovie.forEach((movie) => {
    domString += '<div class = "col-3">';
    domString += '<div class="card border-primary mb-3" style="max-width: 18rem;">';
    domString += `<div class='card-header d-flex justify-content-center'>${movie.id}</div>`;
    domString += '<div class="card-body text-primary">';
    domString += `<h5 class="card-title"> ${movie.name}</h5>`;
    domString += `<p class="card-text"> ${movie.description}</p>`;
    domString += `<button id = "${movie.id}" type = "button" class = "btn btn-info locationBtn" ><p class="card-text"><h6> click me for locations</h6>${movie.releaseDate}</p></button>`;
    domString += `<p class="card-text">${movie.locations.length}</p>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('movies', domString);
};

const filterMovieLocation = (e) => {
  const buttonId = e.currentTarget.id;
  moviesArray.forEach((one) => {
    switch (buttonId) {
      case `${one.id}`:
        console.error(`${one.id}`);
        console.error(`${one.locations}`);
        break;
      case `${one.id + 1}`:
        console.error(`${one.locations}`);
        break;
      case 'movie2':
        console.error(`${one.locations}`);
        break;
      case `${one.id + 3}`:
        console.error(`${one.locations}`);
        break;
      default:
        domStringBuilder(moviesArray);
    }
  });
};

const initializeMovies = () => {
  moviesData.getMoviesData()
    .then((response) => {
      const movieResults = response.data.movies;
      moviesArray = movieResults;
      domStringBuilder(moviesArray);
      document.getElementById('movie1').addEventListener('click', filterMovieLocation);
      document.getElementById('movie2').addEventListener('click', filterMovieLocation);
      document.getElementById('movie3').addEventListener('click', filterMovieLocation);
      document.getElementById('movie4').addEventListener('click', filterMovieLocation);
    })
    .catch(err => console.error(err));
};

export default { initializeMovies };
