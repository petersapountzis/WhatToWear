config.js;
// Path: config.js

const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather?&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function getWeather(city) {
  const response = await fetch(
    `${WEATHER_API_URL}${city}&appid=${WEATHER_API_KEY}&units=imperial`
  );
  if (response.status == 404) {
    document.querySelector(".weather").style.display = "none";
    document.querySelector(".error").style.display = "block";
    return;
  } else {
    var data = await response.json();
    console.log(data);
  }
}

searchBtn.addEventListener("click", () => {
  const city = searchBox.value;
  getWeather(city);
});
