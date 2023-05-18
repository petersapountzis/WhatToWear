import { WEATHER_API_KEY, GPT_API_KEY } from "./config.js";

const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather?&q=";
const GPT_API_URL = "https://api.openai.com/v1/chat/completions";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const outputElement = document.querySelector(".GPT_response");
let temp, conditions, humidity, wind, city_fromAPI;

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
    conditions = data.weather[0].main;
    temp = data.main.temp;
    humidity = data.main.humidity;
    wind = data.wind.speed;
    city_fromAPI = data.name;
    console.log(city_fromAPI);
  }
}


async function getGPTData() {
  
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${GPT_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: `You are a wardrobe assistant. I am going to give you current weather data and you are going to give me a recommendation on what to wear. It is currently ${temp} degrees Fahrenheit and ${conditions} with ${humidity}% humidity and ${wind}mph wind speeds in ${city_fromAPI}. What should I wear?` }],
        max_tokens: 100
      })
    };
  
    try {
      const response = await fetch(
        `${GPT_API_URL}`,
        options
      );
      const GPTData = await response.json();
      outputElement.textContent = GPTData.choices[0].message.content;
      console.log(GPTData);
    } catch (err) {
      console.error(err);
    }
  }
  

searchBtn.addEventListener("click", () => {
  console.log("clicked");
  const city = searchBox.value;
  getWeather(city);
  
  getGPTData();
});

// async function getGPTData() {
//   const options = {
//     method: "POST",
//     headers: {
//       "Authorization": `Bearer ${GPT_API_KEY}`,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       model: "gpt-3.5-turbo",
//       messages: [{ role: "user", content: "hello" }],
//       max_tokens: 100
//     })
//   };

//   try {
//     const response = await fetch(
//       "https://api.openai.com/v1/completions",
//       options
//     );
//     const GPTData = await response.json();
//     // outputElement.textContent = GPTData.choices[0].message.content;
//     console.log(GPTData);
//   } catch (err) {
//     console.error(err);
//   }
// }



  
  
  
  
