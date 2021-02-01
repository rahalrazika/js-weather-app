const CelsiusToFarenheit = (temp) => `${Math.round((temp * 0.55) + 32)} °F`;
const celsius = (temp) => `${Math.round(temp)} °C`;
const switchButton = (temp) => {
  if (document.querySelector('.temp').innerText.includes('C')) {
    document.querySelector('.temp').innerText = CelsiusToFarenheit(temp);
  } else {
    document.querySelector('.temp').innerText = celsius(temp);
  }
};
export default switchButton;