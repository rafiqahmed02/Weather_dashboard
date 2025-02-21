import * as React from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../../store/fetchWeather';
import { SuggestionItem } from './styled';

interface ISuggestionProps {
  label: string;
  hideSuggestionFn: Function;
  onSelect: () => void;
}

const Suggestion: React.FC<ISuggestionProps> = (props) => {
  const dispatch = useDispatch();

  const onClick = () => {
    props.onSelect(); // Updates search bar with city
    dispatch(fetchWeather(props.label.split(',')[0])); // Fetch weather data
    setTimeout(() => {
      props.hideSuggestionFn();
    }, 400);
  };

  return <SuggestionItem onClick={onClick}>{props.label}</SuggestionItem>;
};

export default Suggestion;
