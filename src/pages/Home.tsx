import React from 'react';
import { useSelector } from 'react-redux';
import Footer from '../components/Footer/Footer';
import Search from '../components/Search/Search';
// import Spinner from '../components/ui/Spinner/Spinner';
import CurrentWeather from '../components/CurrentWeather/CurrentWeather';
import { AppStore } from '../store/store';

const Home = () => {
  const { loading } = useSelector((state: AppStore) => ({
    loading: state.app.isLoading,
  }));

  return (
    <>
      {/* {loading && <Spinner />} */}
      <h1>Weather App</h1>
      <Search />
      <CurrentWeather />
      <Footer />
    </>
  );
};

export default Home;
