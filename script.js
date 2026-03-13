async function getWeather(){

const city = document.getElementById("cityInput").value;

const apiKey = "7092653eee0ff7795498542818446a95";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

const response = await fetch(url);

const data = await response.json();

const weatherInfo = `
City: ${data.name} <br>
Temperature: ${data.main.temp}°C <br>
Weather: ${data.weather[0].description}
`;

document.getElementById("weatherResult").innerHTML = weatherInfo;

}