import React, { FC, FormEvent, useState } from "react";
import { setAlert } from "../store/actions/alertActions";
import { getWeather, setLoading } from "../store/actions/weatherActions";
import { useAppDispatch } from "../hooks";


interface SearchProps {
    title: string;
}

const Search: FC<SearchProps> = ({ title }) => {
    const dispatch = useAppDispatch();
    const [city, setCity] = useState("");

    const changeHandler = (e: FormEvent<HTMLInputElement>) => {
        setCity(e.currentTarget.value);
    }

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (city.trim() === "") {
            return dispatch(setAlert('City is required!'));
        }
        dispatch(setLoading());
        dispatch(getWeather(city));
        setCity("");
    }



    return (
        <div className="hero  has-text-centered">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title has-text-white">{title}</h1>
                    <form className="py-5" onSubmit={submitHandler}>
                        <input
                            type="text"
                            className="input has-text-centered mb-2"
                            placeholder="Enter city name"
                            style={{ maxWidth: 300 }}
                            value={city}
                            onChange={changeHandler}
                        />
                        <button className="button is-fullwidth searchBtn" style={{border: "1px solid #ff8c00", color: "white"}}>Search</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Search;