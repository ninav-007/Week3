// DAY 7 - Mini Project: Weather App (Console Version)

async function fetchWeather() {
  try {
    const latitude = 11.25;   // Example: Kerala
    const longitude = 75.78;

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }

    const data = await response.json();

    const weather = data.current_weather;

    // Using template literals
    console.log("🌦️ WEATHER REPORT");
    console.log(`Temperature : ${weather.temperature}°C`);
    console.log(`Wind Speed  : ${weather.windspeed} km/h`);
    console.log(`Condition   : Weather Code ${weather.weathercode}`);

  } catch (error) {
    console.error("❌ Error:", error.message);
  } finally {
    console.log("✅ Weather check completed.");
  }
}

fetchWeather();
