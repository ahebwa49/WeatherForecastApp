import axios from 'axios';

const API_KEY = '03d17752ca362bc60ca7df94aac228a6';
const ROOT_URL = `api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export default function fetchWeather(city){
  const url =`${ROOT_URL}&${city},us`;
  const request = axios.get(url);


}
