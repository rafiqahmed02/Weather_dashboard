import { createSlice } from '@reduxjs/toolkit';
import { ExtendedForecastData, WeatherData } from '../../api/types';
import { fetchWeather, transformWeatherData } from '../fetchWeather';

export type WeatherState = {
  weatherData: WeatherData;
  extendedWeatherData: ExtendedForecastData[];
  isError: boolean;
}

const initialState: WeatherState = {
  weatherData: {
    main: {
      feels_like: 0,
      humidity: 0,
      pressure: 0,
      temp: 0,
      temp_max: 0,
      temp_min: 0,
    },
    name: '',
    sys: {
      country: '',
      sunrise: 0,
      sunset: 0,
    },
    weather: {
      id: 200,
      main: '',
      description: '',
      icon: '',
    },
    wind: {
      deg: 0,
      speed: 0,
    },
  },
  extendedWeatherData: [],
  isError: false,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.fulfilled, (state, action) => {
        const res = transformWeatherData(action.payload);
        state.weatherData.main = { ...state.weatherData.main, ...res.weather.main };
        state.weatherData.wind = { ...state.weatherData.wind, ...res.weather.wind };
        state.weatherData.sys = { ...state.weatherData.sys, ...res.weather.sys };
        state.weatherData.weather = { ...state.weatherData.weather, ...res.weather.weather };
        state.weatherData.name = res.weather.name;
      })
      .addCase(fetchWeather.rejected, (state) => {
        state.isError = true;
      });
  }
});

export default weatherSlice.reducer;
