import lightBg from './assets/bg.svg';


export interface Theme {
  appTitleColor: string;
  backgroundImage: string;
  backgroundGradient: {
    color1: string;
    color2: string;
  };
  panelBgColor: string;
  panelTitleColor: string;
  forecastPanelBgColor: string;
  searchInput: {
    color: string;
    placeholderColor: string;
  };
  temperatureSwitch: {
    backgroundColor: string;
    sliderColor: string;
    textColor: string;
  };
  searchSuggestion: {
    backgroundColor: string;
    hoverBackgroundColor: string;
    seperatorLineColor: string;
  };
  smallIconColor: string;
  smallIconTextColor: string;
}

export const lightTheme: Theme = {
  appTitleColor: '#2F5D8A',
  backgroundImage: lightBg,
  backgroundGradient: {
    color1: 'Blue',
    color2: 'white',
  },
  panelBgColor: '#FFFFFF',
  panelTitleColor: '#727E8E',
  forecastPanelBgColor: 'rgba(255, 255, 255, 0.75)',
  searchInput: {
    color: '#727E8E',
    placeholderColor: '#6898d5',
  },
  temperatureSwitch: {
    backgroundColor: '#77b1c7',
    sliderColor: '#fff',
    textColor: '#fff',
  },
  searchSuggestion: {
    backgroundColor: '#fff',
    hoverBackgroundColor: '#f9f9f9',
    seperatorLineColor: '#ccc',
  },
  smallIconColor: '#A1B9CE',
  smallIconTextColor: '#7B98B2',
};

