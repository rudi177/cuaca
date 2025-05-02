// services/weather.ts
import axios from 'axios';

const API_KEY = 'YOUR_API_KEY'; // Dapatkan dari openweathermap.org
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getCurrentWeather = async (city: string) => {
  const url = `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await axios.get(url);
  return response.data;
};
