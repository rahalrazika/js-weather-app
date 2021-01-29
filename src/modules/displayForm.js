const displayWeather = (data) => {
  const { name } = data;
  const { icon, description } = data.weather[0];
  const { temp, humidity } = data.main;
  const { speed } = data.wind;

  document.querySelector('.city').innerText = `Weather in ${name}`;
  document.querySelector('.icon').src = `https://openweathermap.org/img/wn/${icon}.png`;
  document.querySelector('.description').innerText = description;

  document.querySelector('.temp').innerText = ` ${ Math.round(temp - 273)} °C`;
  document.querySelector('.humidity').innerText = `Humidity: ${humidity}%`;
  document.querySelector('.wind').innerText = `Wind speed: ${speed} km/h`;
  document.querySelector('.weather').classList.remove('loading');
  // document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/? ${name} `;
};

export default displayWeather;
