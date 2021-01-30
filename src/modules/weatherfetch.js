import displayWeather from './displayForm';
import customAlert from './alert';

const fetchWeather = (city) => {
  const apikey = '17e507806c9fd24a8d1f1057c7d359bc';
  const usrlBase = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apikey}`;
  fetch(usrlBase, { mode: 'cors' })
    .then(response => response.json())
    .then((data) => displayWeather(data))

  // eslint-disable-next-line no-alert
  // .catch(() => alert('Invalid cite name please enter a valide name'));

    .catch(

      () => {
        document.getElementById('container').innerHTML += customAlert('City not found. Please realod the page and try again! ');
      },
    );
};


export default fetchWeather;