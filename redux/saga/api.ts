import {API_KEY} from '@env';
import {IWeather} from '../../types/weather';
import {IForecast} from '../../types/forecast';

const API_BASE_URL = 'https://api.openweathermap.org/data/2.5';
const PARAMS = new URLSearchParams({
  q: 'Sumy',
  units: 'metric',
  appid: API_KEY,
});
export const fetchCurrentWeather = async (): Promise<IWeather> => {
  const response = await fetch(`${API_BASE_URL}/weather?${PARAMS}`);
  return await response.json();
};

export const fetchForecast = async (): Promise<IForecast> => {
  const response = await fetch(`${API_BASE_URL}/forecast?${PARAMS}`);
  return await response.json();
};
