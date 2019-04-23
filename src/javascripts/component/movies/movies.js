import moviesData from '../../helpers/data/moviesData';

import './movies.scss';
import util from '../../helpers/util';

let movies = [];

const domStringBuilder = () => {
  let domString = '';
  domString += '<div class = "row">';
  movies.forEach((movie) => {
    domString += '<div class = "col-3">';
    domString += '<div class="card border-primary mb-3" style="max-width: 18rem;">';
    domString += `<div class='card-header d-flex justify-content-center'>${movie.id}</div>`;
    domString += '<div class="card-body text-primary">';
    domString += `<h5 class="card-title"> ${movie.name}</h5>`;
    domString += `<p class="card-text"> ${movie.description}</p>`;
    domString += `<button type = "button" class = "btn btn-info"><p class="card-text">${movie.releaseDate}</p></button>`;
    domString += `<p class="card-text">${movie.locations.length}</p>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('movies', domString);
};

const initializeMovies = () => {
  moviesData.getMoviesData()
    .then((response) => {
      const movieResults = response.data.movies;
      movies = movieResults;
      domStringBuilder();
    })
    .catch(err => console.error(err));
};

export default { initializeMovies };
