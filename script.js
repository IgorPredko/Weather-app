const form = document.querySelector("form");
const apiKey = "f8edf96ad87c2c5bf53de1fb7363c87b";
let inputValue = document.getElementById("city");
const weatherCard = document.querySelector(".weather-card");
const weatherContent = document.querySelector(".weather-content");
let cityInput;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  cityInput = inputValue.value.toString();
  console.log(inputValue);
  weather();
  // inputValue.focus();
  form.reset();
});

function weather() {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`
  )
    .then((response) => response.json())
    .then(function (data) {
      console.log(data);

      weatherCard.innerHTML = `<button class="close" onClick="closeCard()">X</button>
      <div class = 'country'>${data.name}<sup>${data.sys.country}</sup></div>
      <div class="temperature">${Math.round(data.main.temp)}<sup>o</sup>C</div>
      <div class="weather-icon"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
        data.weather[0].icon
      }.svg" alt="${data.weather[0].main} icon"></div>
          <div class="weather-description">${data.weather[0].description}</div>
      </div>
      <div class="wind-speed">Wind speed: ${data.wind.speed}m/s</div>
       <div class="humidity">Humidy: ${data.main.humidity}%</div>`;
      if (
        data.weather[0].id === 600 ||
        data.weather[0].id === 601 ||
        data.weather[0].id === 602 ||
        data.weather[0].id === 611 ||
        data.weather[0].id === 612 ||
        data.weather[0].id === 613 ||
        data.weather[0].id === 615 ||
        data.weather[0].id === 616 ||
        data.weather[0].id === 620 ||
        data.weather[0].id === 621 ||
        data.weather[0].id === 622
      ) {
        weatherContent.classList.add("snow");
      } else if (
        data.weather[0].id === 200 ||
        data.weather[0].id === 201 ||
        data.weather[0].id === 202 ||
        data.weather[0].id === 210 ||
        data.weather[0].id === 211 ||
        data.weather[0].id === 212 ||
        data.weather[0].id === 221 ||
        data.weather[0].id === 230 ||
        data.weather[0].id === 231 ||
        data.weather[0].id === 232
      ) {
        weatherContent.classList.add("thunderstorm");
      } else if (
        data.weather[0].id === 300 ||
        data.weather[0].id === 301 ||
        data.weather[0].id === 302 ||
        data.weather[0].id === 310 ||
        data.weather[0].id === 311 ||
        data.weather[0].id === 312 ||
        data.weather[0].id === 313 ||
        data.weather[0].id === 314 ||
        data.weather[0].id === 321 ||
        data.weather[0].id === 500 ||
        data.weather[0].id === 501 ||
        data.weather[0].id === 502 ||
        data.weather[0].id === 503 ||
        data.weather[0].id === 504 ||
        data.weather[0].id === 511 ||
        data.weather[0].id === 520 ||
        data.weather[0].id === 521 ||
        data.weather[0].id === 522 ||
        data.weather[0].id === 531
      ) {
        weatherContent.classList.add("rain");
      } else if (
        data.weather[0].id === 701 ||
        data.weather[0].id === 711 ||
        data.weather[0].id === 721 ||
        data.weather[0].id === 731 ||
        data.weather[0].id === 741 ||
        data.weather[0].id === 751 ||
        data.weather[0].id === 761 ||
        data.weather[0].id === 762 ||
        data.weather[0].id === 771 ||
        data.weather[0].id === 781
      ) {
        weatherContent.classList.add("fog");
      } else if (
        data.weather[0].id === 801 ||
        data.weather[0].id === 802 ||
        data.weather[0].id === 803 ||
        data.weather[0].id === 804
      ) {
        weatherContent.classList.add("clouds");
      } else if (data.weather[0].id === 800 && data.weather[0].icon === "01d") {
        weatherContent.classList.add("clearsky");
      } else if (data.weather[0].id === 800 && data.weather[0].icon === "01n") {
        weatherContent.classList.add("nightsky");
      }
      weatherCard.classList.remove("hide");
    })
    .catch(function () {
      console.log("ERROR. CITY IS NOT VALID!");
      alert("City is not valid, try again!");
      form.reset();
      inputValue.focus();
      weatherContent.classList.remove("snow");
      weatherContent.classList.remove("thunderstorm");
      weatherContent.classList.remove("rain");
      weatherContent.classList.remove("fog");
      weatherContent.classList.remove("clouds");
      weatherContent.classList.remove("clearsky");
      weatherContent.classList.remove("nightsky");
      weatherCard.classList.add("hide");
    });
}

function closeCard() {
  weatherContent.classList.remove("snow");
  weatherContent.classList.remove("thunderstorm");
  weatherContent.classList.remove("rain");
  weatherContent.classList.remove("fog");
  weatherContent.classList.remove("clouds");
  weatherContent.classList.remove("clearsky");
  weatherContent.classList.remove("nightsky");
  weatherCard.classList.add("hide");
  form.reset();
  inputValue.focus();
}
