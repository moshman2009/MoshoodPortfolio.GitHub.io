// API Key and Base URL
const API_KEY = '7d601698ab8520b81c5638e5d5ac2203'; // Replace with your API key


// DOM Elements
const locationInput = document.getElementById('location-input');
const getWeatherBtn = document.getElementById('get-weather-btn');
const weatherResult = document.getElementById('weather-result');

// Fetch Weather Data
const fetchWeather = async (location) => {
  const API_URL=`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Location not found');
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    weatherResult.innerHTML = `<p>${error.message}</p>`;
  }
};

// Display Weather Data
const displayWeather = (data) => {
  const { name, main, weather } = data;
  weatherResult.innerHTML = `
    <h3>${name}</h3>
    <p>Temperature: ${main.temp}°C</p>
    <p>Weather: ${weather[0].description}</p>
  `;
};

// Add Event Listener
getWeatherBtn.addEventListener('click', () => {
  const location = locationInput.value.trim();
  if (location) {
    console.log(location);
    fetchWeather(location);
  } else {
    weatherResult.innerHTML = `<p>Please enter a location!</p>`;
  }
});