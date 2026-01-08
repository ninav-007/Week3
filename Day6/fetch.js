//Task1

async function fetchWeather() {
  try {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=11.25&longitude=75.78&current_weather=true"
    );

    const data = await response.json();
    console.log("Current Weather Data:");
    console.log(data.current_weather);

  } catch (error) {
    console.error("Error fetching weather:", error);
  }
}

fetchWeather();


//Task2

function findLargest(arr) {
  let max = arr[0];

  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

console.log(findLargest([10, 45, 23, 89, 12]));


//Task3

async function getWeatherData() {
  try {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=11.25&longitude=75.78&current_weather=true"
    );

    const weatherData = await response.json();
    console.log(weatherData.current_weather);

  } catch (error) {
    console.error("Failed to fetch weather data:", error);
  }
}

getWeatherData();
