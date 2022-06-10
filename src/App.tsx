import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from './hooks';
import './App.css';
import { RootState } from './store';
import Search from './components/Search';
import Weather from './components/Weather';
import { setAlert } from './store/actions/alertActions';
import { setError } from './store/actions/weatherActions';
import Alert from './components/Alert';
import LoaderGif from './assets/Storm.gif';


const App: FC = () => {
  const dispatch = useAppDispatch();
  const weatherData = useAppSelector((state: RootState) => state.weather.data);
  const loading = useAppSelector((state: RootState) => state.weather.loading);
  const error = useAppSelector((state: RootState) => state.weather.error);
  const alertMsg = useAppSelector((state: RootState) => state.alert.message);


  return (
    <div className="App">
      <Search title="Enter city name and press search button" />
      {loading ? <div className="main-container"><div className="loaderEdit"><img width="" src={LoaderGif} alt="loader" /></div></div> : weatherData && <Weather data={weatherData} />}

      {alertMsg && <Alert message={alertMsg} onClose={() => dispatch(setAlert(""))} />}
      {error && <Alert message={error} onClose={() => dispatch(setError())} />}
    </div>
  );
}

export default App;
