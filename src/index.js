import 'tailwindcss/tailwind.css';
import weatherContainer from './modules/weatherContainer';
import fetchWeather from './modules/weatherfetch';

document.getElementById('container').innerHTML = weatherContainer();
fetchWeather('manila');
weatherContainer();