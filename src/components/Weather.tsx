import React, {FC} from 'react';
import { WeatherData } from '../store/types';


interface WeatherProps {
    data: WeatherData;
}

const Weather: FC<WeatherProps> = ({data}) => {
    const fahrenheit = (data.main.temp * 1.8 - 459.67).toFixed(2);
    const celsius = Math.round(data.main.temp - 273.15);


    return (
        <div className="main-container">
                <div className="city">
                    <h2 className="city-name">
                        <span>{data.name}</span>
                        <sup>{data.sys.country}</sup>
                    </h2>
                    <div className="city-temp">
                        {celsius}
                        <sup>&deg;C</sup>
                    </div>
                    <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={data.weather[0].description} />
                        <p>{data.weather[0].description}</p>
                    </div>
                </div>
        </div>
    );
}

export default Weather;