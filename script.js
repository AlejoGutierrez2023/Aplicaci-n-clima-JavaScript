const urlBASE = `https://api.openweathermap.org/data/2.5/weather`;
const API_KEY = 'API-KEY';
const diffKelvin = 273.15;

document.getElementById('searchButton').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    if (city) {
        fetchWeather(city);
    } else {
        alert('Debes ingresar una ciudad');
    }
})

function fetchWeather(city) {
    fetch(`${urlBASE}?q=${city}&appid=${API_KEY}&lang=es`)
    .then(data => data.json())
    .then(data => showWeatherData(data))


}

function showWeatherData(data) {
    const divResponseData = document.getElementById('responseData');
    divResponseData.innerHTML = ''; //Arranca en vacio

    const cityName = data.name;
    const countryName = data.sys.country;
    const temperature = data.main.temp - diffKelvin;
    const humidity = data.main.humidity;
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;


    const cityInfo = document.createElement('h2');
    cityInfo.textContent = `${cityName}, ${countryName}`;

    const temperatureInfo = document.createElement('p');
    temperatureInfo.textContent = `Temperatura: ${Math.floor(temperature)}°C`;

    const humidityInfo = document.createElement('p');
    humidityInfo.textContent = `Humedad: ${humidity}%`;

    const descriptionInfo = document.createElement('p');
    descriptionInfo.textContent = `Descripción: ${description}`;

    const iconInfo = document.createElement('img');
    iconInfo.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;

    divResponseData.appendChild(cityInfo);
    divResponseData.appendChild(temperatureInfo);
    divResponseData.appendChild(humidityInfo);
    divResponseData.appendChild(descriptionInfo);
    divResponseData.appendChild(iconInfo);


}




