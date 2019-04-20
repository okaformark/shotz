import locationsData from '../../helpers/data/locationsData';
import util from '../../helpers/util';
import './locations.scss';

let movieLocations = [];

const domStringBuilder = () => {
  let domString = '';
  movieLocations.forEach((location) => {
    domString += `<h2>${location.name}</h2>`;
  });
  util.printToDom('locations', domString);
};

const initializeMovieLocations = () => {
  locationsData.getLocationsData()
    .then((response) => {
      const locationsResult = response.data.locations;
      movieLocations = locationsResult;
      domStringBuilder();
    })
    .catch(error => console.error(error));
};

export default { initializeMovieLocations };
