const weather = document.querySelector("#weather div:nth-child(2)");
const city = document.querySelector("#weather div:first-child");
const Temperatue = document.querySelector("#weather div:last-child");
const API_KEY = "5117311378136bdaf99d86a9984859f2";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = `City:           ${data.name}`;
      Temperatue.innerText = `Temperatue:    ${data.main.temp}`;
      weather.innerText = `Weather:       ${data.weather[0].main}`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
