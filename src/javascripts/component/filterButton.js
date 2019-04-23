import locations from './locations/locations';

const buttonClick = (event) => {
  const buttonId = event.target.id;
  const locationArrays = [];
  locations.forEach((location) => {
    if (location.type === buttonId) {
      locationArrays.push(location);
    }
  });
  if (buttonId === 'All') {
    domStringBulder(locations);
  } else {
    domStringBulder(locationArrays);
  }

  const buttonEvent = () => {
    document.getElementById('all').addEventListener('click', buttonClick);
    document.getElementById('morning').addEventListener('click', buttonClick);
    document.getElementById('afternoon').addEventListener('click', buttonClick);
    document.getElementById('evening').addEventListener('click', buttonClick);
    document.getElementById('evdarkening').addEventListener('click', buttonClick);
  };
};
