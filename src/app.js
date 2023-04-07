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
  console.log(response.data);
  let temperatureElementMonday = document.querySelector("#temp-monday");
  let cityElement = document.querySelector("#city");
  let weatherDescription = document.querySelector("#weather-description");
  let humidityElement = document.querySelector("#humidity-element");
  let windElement = document.querySelector("#wind-element");
  let dateElement = document.querySelector("#date");
  let iconElement = document.querySelector("#icon");

  //setting icon elements for other days of the week
  let iconElementTue = document.querySelector("#icon-tue");
  let iconElementWed = document.querySelector("#icon-wed");
  let iconElementThu = document.querySelector("#icon-thu");
  let iconElementFri = document.querySelector("#icon-fri");
  let iconElementSat = document.querySelector("#icon-sat");

  //setting temperature for other days of the week
  let temperatureElementTue = document.querySelector("#temp-tue");
  let temperatureElementWed = document.querySelector("#temp-wed");
  let temperatureElementThu = document.querySelector("#temp-thu");
  let temperatureElementFri = document.querySelector("#temp-fri");
  let temperatureElementSat = document.querySelector("#temp-sat");

  temperatureElementTue.innerHTML = Math.round(
    response.data.daily[2].temperature.day
  );
  temperatureElementWed.innerHTML = Math.round(
    response.data.daily[3].temperature.day
  );
  temperatureElementThu.innerHTML = Math.round(
    response.data.daily[4].temperature.day
  );
  temperatureElementFri.innerHTML = Math.round(
    response.data.daily[5].temperature.day
  );
  temperatureElementSat.innerHTML = Math.round(
    response.data.daily[6].temperature.day
  );

  iconElement.setAttribute(
    "src",
    `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.daily[1].condition.icon}.png`
  );
  iconElement.setAttribute("alt", response.data.daily[1].condition.description);

  //setting icon element attributes for other days of the week

  iconElementTue.setAttribute(
    "src",
    `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.daily[2].condition.icon}.png`
  );
  iconElementWed.setAttribute(
    "src",
    `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.daily[3].condition.icon}.png`
  );
  iconElementThu.setAttribute(
    "src",
    `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.daily[4].condition.icon}.png`
  );
  iconElementFri.setAttribute(
    "src",
    `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.daily[5].condition.icon}.png`
  );
  iconElementSat.setAttribute(
    "src",
    `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.daily[6].condition.icon}.png`
  );

  dateElement.innerHTML = formateDate(response.data.daily[1].time * 1000);
  windElement.innerHTML = Math.round(response.data.daily[1].wind.speed);
  humidityElement.innerHTML = Math.round(
    response.data.daily[1].temperature.humidity
  );
  weatherDescription.innerHTML = response.data.daily[1].condition.description;
  cityElement.innerHTML = response.data.city;
  temperatureElementMonday.innerHTML = Math.round(
    response.data.daily[1].temperature.day
  );
}

apiKey = "d0aaf35fd7f0bc76394a85b20o4aeft8";
query = "Tokyo";
apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${query}&key=${apiKey}&units=metric`;
//console.log(apiUrl);

axios.get(apiUrl).then(displayWeatherForecast);
