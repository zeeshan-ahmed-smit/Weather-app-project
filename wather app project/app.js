const cityName = document.getElementById('cityName');
const countryName = document.getElementById('country');
const tempElem = document.getElementById('temperature');
const tempImgElem = document.getElementById('tempImg');
const tempImgElemText = document.getElementById('tempImgElemText');
const FeelsLike = document.getElementById('FeelsLike');
const WindSpeed = document.getElementById('WindSpeed');
const Humidity = document.getElementById('Humidity');
const weatherinput = document.getElementById('input');





navigator.geolocation.getCurrentPosition((location) => {
    let lat = location.coords.latitude;
    let lon = location.coords.longitude;

    (async () => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=89dcbebd85be25f24d2df5d3a64ff476&units=metric`)
            const result = await response.json()
            console.log(result)

            cityName.innerHTML = result.name;
            countryName.innerHTML = result.sys.country;
            tempElem.innerHTML = `${Math.round(result.main.temp)} &#8451`;
            tempImgElemText.innerHTML = result.weather[0].main;
            FeelsLike.innerHTML = `${Math.round(result.main.feels_like)} &#8451`;
            WindSpeed.innerHTML = `${Math.round(result.wind.speed)} kp/h`;
            Humidity.innerHTML = `${result.main.humidity} %`;
            if (result.weather[0].main === 'Clouds') {
                tempImgElem.src = './images/cloudy.svg';
            }
            else if (result.weather[0].main === 'Haze') {
                tempImgElem.src = './images/haze.svg';
            }
            else if (result.weather[0].main === 'Rain') {
                tempImgElem.src = './images/rain.svg';
            }
            else if (result.weather[0].main === 'Fog') {
                tempImgElem.src = './images/fog.svg';
            } 
            else if (result.weather[0].main === 'Clear') {
                tempImgElem.src = './images/clear-day.svg';
            }
        }
        catch (e) {
            swal("Error!", "City Name is incorrect:", "warning");
            weatherinput.value = '';
        }

    })();
});


let getWeather = () => {
    InputValue = weatherinput.value;
    weatherNames = InputValue[0].toUpperCase() + InputValue.slice(1);
    console.log(weatherNames);
    (async () => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weatherNames}&appid=89dcbebd85be25f24d2df5d3a64ff476&units=metric`)
            const result = await response.json()
            console.log(result)
            cityName.innerHTML = result.name;
            countryName.innerHTML = result.sys.country;
            tempElem.innerHTML = `${Math.round(result.main.temp)} &#8451`;
            tempImgElemText.innerHTML = result.weather[0].main;
            FeelsLike.innerHTML = `${Math.round(result.main.feels_like)} &#8451`;
            WindSpeed.innerHTML = `${Math.round(result.wind.speed)} mp/h`;
            Humidity.innerHTML = `${result.main.humidity} %`;
            if (result.weather[0].main === 'Clouds') {
                tempImgElem.src = './images/cloudy.svg';
            }
            else if (result.weather[0].main === 'Haze') {
                tempImgElem.src = './images/haze.svg';
            }
            else if (result.weather[0].main === 'Rain') {
                tempImgElem.src = './images/rain.svg';
            }
            else if (result.weather[0].main === 'Fog') {
                tempImgElem.src = './images/fog.svg';
            }
            else if (result.weather[0].main === 'Clear') {
                tempImgElem.src = './images/clear-day.svg';
            }
        }
        catch (e) {
            swal("Error!", "City Name is incorrect:", "warning");
            weatherinput.value = '';
        };
    })();

}

window.addEventListener('keydown', (key) => {
    let keyCode = key.code
    if (keyCode === 'Enter' || keyCode === 'NumpadEnter') {
        getWeather();
    }
});


















































let newDate = new Date();
document.getElementById('date').innerHTML = newDate.toDateString();