const api_key = '03a0dae427a414fcdfaa6e96454da0c5'; // api_key

async function getWeather() {
    const city = document.getElementById('cityInput');
    const weatherCard = document.getElementById('weatherCard');
    const errorMsg = document.getElementById('errorMsg');

    if (!city) return (errorMsg.textContent = 'Please enter a city.');

    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`); // link

        if (!response.ok) throw new Error('City not found');

        const data = await response.json();
        const { name, main, weather, wind, dt } = data;
        const icon = `https://openweathermap.org/img/wn/${weather[0].icon}.png` // icon link
        weatherCard.innerHTML = `
            <h2>Weather Dashboard</h2>
            <p>${name}</p>
            <p>"img src=${icon}" class = 'weather-icon' alt = 'weather icon'</p>
            <p>Temperature: ${main.temp}</p>
            <p>Feels Like: ${main.feels_like}</p>
            <p>Humiditiy: ${main.humidity}</p>
            <p>Wind Speed: ${wind.speed}</p>
            <p>Date: ${new Date(dt * 1000).toLocaleString()}</p>
        `
        errorMsg.textContent = '';
    }catch(error){
        errorMsg.textContent = 'City not found or API Error';
        weatherCard.innerHTML = '';
    }

}