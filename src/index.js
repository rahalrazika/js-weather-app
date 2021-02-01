import 'tailwindcss/tailwind.css';
import weatherContainer from './modules/weatherContainer';
import fetchWeather from './modules/weatherfetch';


document.getElementById('container').innerHTML = weatherContainer();
fetchWeather('algeria');
weatherContainer();

const search = () => {
  fetchWeather(document.querySelector('.search-bar').value);
};

document.querySelector('.search button').addEventListener('click', () => {
  fetchWeather();
  search();
});

document
  .querySelector('.search-bar')
  .addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      fetchWeather();
      search();
    }
  });
