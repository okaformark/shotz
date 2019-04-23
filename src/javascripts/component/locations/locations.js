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
const domStringBuilder = (locArray) => {
  let domString = '';
  domString += '<div class = "row">';
  locArray.forEach((location) => {
    domString += '<div class = "col-2">';
    domString += '<div class="card border-primary mb-3" style="max-width: 18rem;">';
    domString += `<h5 class="card-title card-header ${shootTimeClass(location.shootTime)}"> ${location.name}</h5>`;
    domString += ` <img src="${location.imageUrl}" class="card-img-top">`;
    domString += `<div class='card-header d-flex justify-content-center font-weight-bold'>${location.id}</div>`;
    domString += '<div class="card-body text-primary">';
    domString += `<button type = "button" class = "btn btn-dark"><p class="card-text"> ${location.address}</p></button>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('locations', domString);
};

const filterButtonEvent = (e) => {
  const buttonId = e.target.id;
  const darkLocations = movieLocations.filter(x => x.shootTime === 'After Dark');
  const morningLocations = movieLocations.filter(x => x.shootTime === 'Morning');
  const afternoonLocations = movieLocations.filter(x => x.shootTime === 'Afternoon');
  const eveningLocations = movieLocations.filter(x => x.shootTime === 'Evening');
  switch (buttonId) {
    case 'morning':
      domStringBuilder(morningLocations);
      break;
    case 'afternoon':
      domStringBuilder(afternoonLocations);
      break;
    case 'evening':
      domStringBuilder(eveningLocations);
      break;
    case 'dark':
      domStringBuilder(darkLocations);
      break;
    default:
      domStringBuilder(movieLocations);
  }
};
const filterByTextEvent = (e) => {
  const searchText = e.target.value;
  const searchLocations = movieLocations.filter((x) => {
    const hasName = x.name.includes(searchText);
    const hasAddress = x.address.includes(searchText);
    return hasName || hasAddress;
  });
  domStringBuilder(searchLocations);
};

const initializeMovieLocations = () => {
  locationsData.getLocationsData()
    .then((response) => {
      const locationsResult = response.data.locations;
      movieLocations = locationsResult;
      domStringBuilder(movieLocations);
      document.getElementById('dark').addEventListener('click', filterButtonEvent);
      document.getElementById('afternoon').addEventListener('click', filterButtonEvent);
      document.getElementById('evening').addEventListener('click', filterButtonEvent);
      document.getElementById('morning').addEventListener('click', filterButtonEvent);
      document.getElementById('all').addEventListener('click', filterButtonEvent);
      document.getElementById('search-input').addEventListener('keyup', filterByTextEvent);
    })
    .catch(error => console.error(error));
};

export default { initializeMovieLocations };
