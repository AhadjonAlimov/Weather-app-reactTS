import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from './reducers/weatherReducer';
import alertReducer from './reducers/alertReducer';
import { type } from 'os';


const rootReducer = combineReducers({
    weather: weatherReducer,
    alert: alertReducer
});

const store = configureStore({ 
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production"
})

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;