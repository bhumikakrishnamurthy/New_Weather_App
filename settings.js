const unitsForm = document.getElementById('units-form');
const locationForm = document.getElementById('location-form');

unitsForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const selectedUnits = document.querySelector('input[name="units"]:checked').value;
  localStorage.setItem('units', selectedUnits);
  alert('Units saved.');
});

locationForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;
  const location = `${city}, ${state}`;
  localStorage.setItem('location', location);
  alert('Location saved.');
});
