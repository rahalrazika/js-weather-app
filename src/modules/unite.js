
const kelvinToCelsius = (temp) => `${Math.round(temp - 273)}°C`;
const kelvinToFarenheit = (temp) => `${Math.round((temp - 273.15) * (9 / 5) + 32)}°F`;
const unite = (temp) => {
  if (temp !== kelvinToCelsius) {
    document.querySelector('.temp').innerText = kelvinToFarenheit(temp);
  } else {
    document.querySelector('.temp').innerText = kelvinToCelsius(temp);
  }
};
export default unite;