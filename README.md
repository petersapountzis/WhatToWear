# WhatToWear

## Description
This JavaScript file is part of the Weather Assistant project. The Weather Assistant is a web application that provides weather information for a given city and generates clothing recommendations based on the current weather conditions. The application integrates with the OpenWeatherMap API to fetch weather data and uses the OpenAI GPT-3.5 model for generating clothing recommendations.

## Setup
To run the Weather Assistant project locally, follow these steps:

1. Clone the repository or download the project files.
2. Obtain an API key from OpenWeatherMap by signing up for an account.
3. Obtain an API key from OpenAI by signing up for an account and generating a GPT-3.5 API key.
4. Create a config.js file in the same directory as the JavaScript file and add the following content:


```js
export const WEATHER_API_KEY = "YOUR_WEATHER_API_KEY";

export const GPT_API_KEY = "YOUR_GPT_API_KEY";
```
Replace "YOUR_WEATHER_API_KEY" with your OpenWeatherMap API key and "YOUR_GPT_API_KEY" with your OpenAI GPT-3.5 API key.

Open the project in a web browser.

## Usage
The Weather Assistant application allows users to search for weather information and receive clothing recommendations for a specific city. Here's how to use the application:

Enter the name of a city in the search input field.
Click the search button or press Enter.
The application will fetch the weather data from the OpenWeatherMap API and display it on the screen.
The application will generate a recommendation for what to wear based on the current weather conditions using the OpenAI GPT-3.5 model.
The recommendation will be displayed in the output area.
## Dependencies
The Weather Assistant project depends on the following:

OpenWeatherMap API - Used to fetch weather data for a specific city.

OpenAI GPT-3.5 model - Used to generate clothing recommendations based on the weather data.
