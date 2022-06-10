import { ThunkAction } from "redux-thunk";
import { RootState } from "../index";
import { WeatherAction, WeatherData, WeatherError, GET_WEATHER, SET_LOADING, SET_ERROR } from "../types";

export const getWeather = (city: string): ThunkAction<void, RootState, unknown, WeatherAction> => { // here is null changed to unknown
    return async dispatch => {
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`);
            if (!res.ok) {
                const resData: WeatherError = await res.json();
                throw new Error(resData.message);
            }

            const resData: WeatherData = await res.json();
            dispatch({ type: GET_WEATHER, payload: resData });
        } catch (err) { // In Typescript v4.4 or higher 
            if (err instanceof Error) {
                dispatch({
                    type: SET_ERROR,
                    payload: err.message
                });
            }
        }
    }
}

export const setLoading = (): WeatherAction => {
    return {
        type: SET_LOADING
    }
}

export const setError = (): WeatherAction => {
    return {
        type: SET_ERROR,
        payload: ""
    }
}