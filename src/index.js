function formattedDate(date) {
  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  function search(city) {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeatherConditions);
  }
  search("Bangkok");

  function handleSubmit(event) {
    event.preventDefault();
    let city = document.querySelector("#city-name").value;

    search(city);
  }

  function displayWeatherConditions(response) {
    console.log(response.data);
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#main-temperature").innerHTML = Math.round(
      response.data.main.temp
    );

    document.querySelector("#humidity").innerHTML = response.data.main.humidity;
    document.querySelector("#wind").innerHTML = Math.round(
      response.data.wind.speed
    );
    document.querySelector("#description").innerHTML =
      response.data.weather[0].main;
  }

  let searchForm = document.querySelector("#city-form");
  searchForm.addEventListener("submit", handleSubmit);

  let day = days[dayIndex];

  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}

let currentTime = new Date();
console.log(currentTime);

let weatherDate = document.querySelector("#date");
weatherDate.innerHTML = formattedDate(currentTime);
