// Target element

const _inputCity = document.getElementById("search-box");
const _submitBtn = document.getElementById("submit-btn");
const _tempValue = document.getElementById("temp_value");
const _humidityValue = document.getElementById("humidity_value");
const _windSpeedValue = document.getElementById("windSpeed_value");
const _desc = document.getElementById("search-city");
const _weatherImage = document.getElementById("weather-img");

async function checkWeatherData(city = "Delhi") {
  const key = "7a92d0c91e9ec15b412126abacd99135";
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

  const weatherdata = await fetch(apiURL).then((response) => response.json());
  // console.log(weatherdata);
  _tempValue.innerHTML = `${Math.round(weatherdata.main.temp - 273.15)} °C`;
  // _cityName.innerHTML = `${city}`;
  _humidityValue.innerHTML = `${weatherdata.main.humidity}%`;
  _windSpeedValue.innerHTML = `${weatherdata.wind.speed}km/h`;
  _desc.innerHTML = `${weatherdata.weather[0].main}`;

  switch (`${weatherdata.weather[0].main}`) {
    case "Clouds":
      _weatherImage.src = "assets/image/cloud-Image.png";
      break;
    case "Rain":
      _weatherImage.src = "assets/image/rainy-image.jpg";
      break;
    case "Snow":
      _weatherImage.src = "assets/image/rainy-image.jpg";
      break;
    case "Light Rain":
      _weatherImage.src = "assets/image/Light-Rain1.jpg";
      break;
    case "Clear":
      _weatherImage.src = "assets/image/clear-sky.png";
      break;
  }
}

_submitBtn.addEventListener("click", () => {
  checkWeatherData(_inputCity.value);
  _inputCity.value = "";
});
