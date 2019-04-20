import movies from './component/movies/movies';
import locations from './component/locations/locations';

import '../styles/main.scss';

const init = () => {
  movies.initializeMovies();
  locations.initializeMovieLocations();
};

init();
