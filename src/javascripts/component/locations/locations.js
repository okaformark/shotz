import locationsData from '../../helpers/data/locationsData';
import util from '../../helpers/util';
import './locations.scss';

let movieLocations = [];


const shootTimeClass = (shootTime) => {
  let selectedClass = '';
  switch (shootTime) {
    case 'Morning':
      selectedClass = 'bg-secondary';
      break;
    case 'Afternoon':
      selectedClass = 'bg-success';
      break;
    case 'Evening':
      selectedClass = 'bg-info';
      break;
    case 'After Dark':
      selectedClass = 'bg-danger';
      break;
    default:
      selectedClass = '';
  }
  return selectedClass;
};
const domStringBuilder = () => {
  let domString = '';
  domString += '<div class = "row">';
  movieLocations.forEach((location) => {
    domString += '<div class = "col-2">';
    domString += '<div class="card border-primary mb-3" style="max-width: 18rem;">';
    domString += ` <img src="${location.imageUrl}" class="card-img-top">`;
    domString += `<div class='card-header d-flex justify-content-center font-weight-bold'>${location.id}</div>`;
    domString += '<div class="card-body text-primary">';
    domString += `<h5 class="card-title card-header ${shootTimeClass(location.shootTime)}"> ${location.name}</h5>`;
    domString += `<button type = "button" class = "btn btn-dark"><p class="card-text"> ${location.address}</p></button>`;
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
