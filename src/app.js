function formateDate(timestamp) {
  //calculate the date and return something like "Friday 5:00"
  let date = new Date();
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wedesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function displayWeatherForecast(response) {
  //console.log(response.data.daily[0].time * 1000);
  let temperatureElementMonday = document.querySelector("#temp-monday");
  let cityElement = document.querySelector("#city");
  let weatherDescription = document.querySelector("#weather-description");
  let humidityElement = document.querySelector("#humidity-element");
  let windElement = document.querySelector("#wind-element");
  let dateElement = document.querySelector("#date");

  dateElement.innerHTML = formateDate(response.data.daily[0].time * 1000);
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
//console.log(apiUrl);

axios.get(apiUrl).then(displayWeatherForecast);
