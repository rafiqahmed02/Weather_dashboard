import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as HighIcon } from '../../assets/high-icon.svg';
import { ReactComponent as HumidityIcon } from '../../assets/humidity-icon.svg';
import { ReactComponent as LowIcon } from '../../assets/low-icon.svg';
import { ReactComponent as PressureIcon } from '../../assets/pressure-icon.svg';
import { ReactComponent as WindIcon } from '../../assets/wind-icon.svg';
import { AppStore } from '../../store/store';
import { kmToMile, TempUnit } from '../../utils/unitConversion';
import WeatherIcon from './WeatherIcon';
import {
  CurrentWeatherStatus,
  CurrentWeatherContainer,
  CurrentWeatherInfo,
  FeelsLike,
  HighLowContainer,
  InfoRow,
  SectionTitle,
  WeatherContainer,
  WeatherDegree,
} from './styled';
import Temperature from './Temperature';

const CurrentWeather: React.FC = () => {
  const { weather, degreeType, isInitial, isError } = useSelector((store: AppStore) => ({
    weather: store.weather.weatherData,
    degreeType: store.app.tempUnit,
    isInitial: store.app.isInitial,
    isError: store.weather.isError,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      console.log('Cannot load weather for this place');
    }
  }, [isError]);

  if (isInitial) return <></>;

  return (
    <WeatherContainer>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <SectionTitle>Current Weather</SectionTitle>
        <div>
        </div>
      </div>
      <CurrentWeatherContainer>
        <CurrentWeatherStatus>
          <h4>{weather.name}</h4>
          <div style={{ display: 'flex' }}>
            <WeatherIcon  big code={12} />
            <span>
              <Temperature value={28} />
              <sup>&deg;</sup>
            </span>
          </div>
          <h6>Bengaluru</h6>
        </CurrentWeatherStatus>

        <CurrentWeatherInfo>
          <FeelsLike>
            Feels like <Temperature value={31} />
            <sup>&deg;</sup>
          </FeelsLike>
          <HighLowContainer>
            <WeatherDegree>
              <HighIcon />
              <Temperature value={25} />
              <sup>&deg;</sup>
            </WeatherDegree>
            <WeatherDegree>
              <LowIcon />
              <Temperature value={19} />
              <sup>&deg;</sup>
            </WeatherDegree>
          </HighLowContainer>
          <InfoRow>
            <div>
              <HumidityIcon /> Humidity
            </div>
            <span>{11}%</span>
          </InfoRow>
          <InfoRow>
            <div>
              <WindIcon /> Wind
            </div>
            <span>
              {degreeType === TempUnit.CELCIUS ? 22 : kmToMile(21)}
              {degreeType === TempUnit.CELCIUS ? 'kph' : 'mph'}
            </span>
          </InfoRow>
          <InfoRow>
            <div>
              <PressureIcon /> Pressure
            </div>
            <span>{18}hPa</span>
          </InfoRow>
        </CurrentWeatherInfo>
      </CurrentWeatherContainer>
    </WeatherContainer>
  );
};

export default CurrentWeather;
