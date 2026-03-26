// Weather Dashboard Functionality

// Function to fetch weather data from API
async function fetchWeather(city) {
    const apiKey = 'your_api_key'; // Replace with your actual API key
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    const data = await response.json();
    return data;
}

// Function to display weather data
function displayWeather(data) {
    const weatherContainer = document.getElementById('weather');
    weatherContainer.innerHTML = `
        <h2>${data.name}</h2>
        <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
    `;
}

// Function to handle form submission
document.getElementById('weatherForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const city = document.getElementById('cityInput').value;
    const weatherData = await fetchWeather(city);
    displayWeather(weatherData);
});
