const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '83bb466d5dmsh653050a1ed60748p1f25bbjsnb8f0be7ecfc7',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response);
            // Assuming these elements exist in your HTML
            cloud_pct.innerHTML = response.cloud_pct;
            temp.innerHTML = response.temp;
            feels_like.innerHTML = response.feels_like;
            humidity.innerHTML = response.humidity;
            min_temp.innerHTML = response.min_temp;
            max_temp.innerHTML = response.max_temp;
            wind_speed.innerHTML = response.wind_speed;
            wind_degrees.innerHTML = response.wind_degrees;
            sunrise.innerHTML = response.sunrise;
            sunset.innerHTML = response.sunset;
        })
        .catch(error => console.error(error));
};

submit.addEventListener("click", (e) => {
    e.preventDefault();
    const city = document.getElementById('city').value; // Assuming you have an input element with the id 'city'
    getWeather(city);
});

// Assuming you want to get the weather for Delhi by default
getWeather("Delhi");
