import locationsData from '../../helpers/data/locationsData';
import util from '../../helpers/util';
import './locations.scss';

let movieLocations = [];

const domStringBuilder = () => {
  let domString = '';
  domString += '<div class = "row">';
  movieLocations.forEach((location) => {
    domString += '<div class = "col-2">';
    domString += '<div class="card border-primary mb-3" style="max-width: 18rem;">';
    domString += ` <img src="${location.imageUrl}" class="card-img-top">`;
    domString += `<div class='card-header d-flex justify-content-center'>${location.id}</div>`;
    domString += '<div class="card-body text-primary">';
    domString += `<h5 class="card-title card-header"> ${location.name}</h5>`;
    domString += `<button type = "button" class = "btn btn-danger"><p class="card-text"> ${location.address}</p></button>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
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
