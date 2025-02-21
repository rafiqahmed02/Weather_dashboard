import { createAsyncThunk } from '@reduxjs/toolkit';
import { ExtendedForecastData, WeatherData } from '../api/types';
import {  fetchWeatherData } from '../api/weather';
import { setIsInitial, setIsLoading } from './reducers/appReducer';

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (city: string | { lat: number; lng: number }, { dispatch, rejectWithValue }) => {
    dispatch(setIsLoading(true));

    try {
      const res = await Promise.all([fetchWeatherData(city)]);
      dispatch(setIsLoading(false));

      if (res[0].cod === 200) {
        dispatch(setIsInitial(false));
        return res;
      }
      
    } catch {
      dispatch(setIsLoading(false));
      return rejectWithValue('Error');
    }
  }
);

export const transformWeatherData = (
  res: any
): {
  weather: WeatherData;
  forecast: ExtendedForecastData[];
} => {
  const weather = res[0] as WeatherData;
  const forecast: ExtendedForecastData[] = [];

  return {
    weather: {
      ...weather, // Spread existing properties
      weather: Array.isArray(weather.weather) && weather.weather.length > 0 
        ? weather.weather[0] // Take the first element if it's an array
        : { id: 0, main: '', description: '', icon: '' }, // Default fallback

      main: {
        ...weather.main,
        temp: weather.main?.temp ?? 0,
        feels_like: weather.main?.feels_like ?? 0,
        temp_max: weather.main?.temp_max ?? 0,
        temp_min: weather.main?.temp_min ?? 0,
      },
      wind: {
        ...weather.wind,
        speed: weather.wind?.speed ? Math.round(weather.wind.speed * 3.6) : 0, // Prevent undefined access
      },
    },
    forecast,
  };
};
