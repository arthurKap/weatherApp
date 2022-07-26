
const param = {
    "url" : "https://api.openweathermap.org/data/2.5/",
    "appid" : "4ed403eb0fd22807bf83a61f532eee7b"
}

function getWeater() {
  const cityId = document.querySelector('.select-city').value;
  fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
	.then(weather => {
			return weather.json();
		}).then(showWeather);
}

function showWeather(data) {

  const cityName = data.name;
    const temp = Math.round(data.main.temp) + '°C';
    const icon = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    const desc = data.weather[0]['description'];
    const wind = Math.round(data.wind['speed']);

    document.querySelector('.city').innerHTML = `Weather in ${cityName}`;
    document.querySelector('.temp').innerHTML = temp;
    document.querySelector('.icon').innerHTML = icon;
    document.querySelector('.description').innerHTML = desc;
    document.querySelector('.wind').innerHTML = `Wind speed: ${wind} km/h`;
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + cityName + "')";
}

getWeater()
document.querySelector('.select-city').onchange = getWeater;
  