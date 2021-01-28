import 'tailwindcss/tailwind.css';
import weatherContainer from './modules/weatherContainer';

document.getElementById('container').innerHTML = weatherContainer();

const fetchWeather = (city) => {
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=17e507806c9fd24a8d1f1057c7d359bc`,
    { mode: 'cors' }).then(response => response.json())
    .then(response => {
      console.log(response);
    });
};
fetchWeather('algeria');
weatherContainer();