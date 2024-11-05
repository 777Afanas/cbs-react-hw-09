import axios from "axios";

const key = "630f52faa7ee434510f43191450a8b40";
const urlKyiv = `https://api.openweathermap.org/data/2.5/weather?q=kyiv&appid=${key}&units=metric&lang=pl`;

export default function fetchWeatherKyiv() {
  return axios.get(urlKyiv);
}
