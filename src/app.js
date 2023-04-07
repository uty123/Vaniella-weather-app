function displayWeatherForecast(response) {
  console.log(response.data.daily[0].wind.speed);
  let temperatureElementMonday = document.querySelector("#temp-monday");
  let cityElement = document.querySelector("#city");
  let weatherDescription = document.querySelector("#weather-description");
  let humidityElement = document.querySelector("#humidity-element");
  let windElement = document.querySelector("#wind-element");
  windElement.innerHTML = Math.round(response.data.daily[0].wind.speed);
  humidityElement.innerHTML = Math.round(
    response.data.daily[0].temperature.humidity
  );
  weatherDescription.innerHTML = response.data.daily[0].condition.description;
  cityElement.innerHTML = response.data.city;
  temperatureElementMonday.innerHTML = Math.round(
    response.data.daily[0].temperature.day
  );
}

apiKey = "d0aaf35fd7f0bc76394a85b20o4aeft8";
query = "Nigeria";
apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${query}&key=${apiKey}&units=metric`;
console.log(apiUrl);

axios.get(apiUrl).then(displayWeatherForecast);
