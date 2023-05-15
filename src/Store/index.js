import { configureStore } from "@reduxjs/toolkit";
import { extractWeatherDetails } from "./helper";
import LoadingSlice, { LoadingActions } from "./LoadingSlice";
import WeatherSlice, { WeatherActions } from "./WeatherSlice";

const store = configureStore({
    reducer: {
        weather: WeatherSlice.reducer,
        loading: LoadingSlice.reducer,
    },
});

export const getWeather = (lat, lon, units) => {
    return async (dispatch) => {
        dispatch(LoadingActions.setLoading({ Loading: true }));
        const fetchWeather = async (
            lat = 22.5,
            lon = 27.6303,
            units = "metric",
        ) => {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?appid=0bf56ee08bac780146f664ba875066a3&lon=${lon}&lat=${lat}&units=${units}`,
            );
            if (!response.ok) {
                throw new Error({
                    Code: response.status,
                    Message: "Something went wrong",
                });
            }
            const data = await response.json();
            return extractWeatherDetails(data);
        };
        try {
            const data = await fetchWeather(lat, lon, units);
            dispatch(WeatherActions.setWeather({ data: data }));
            dispatch(LoadingActions.setLoading({ Loading: false }));
        } catch (error) {
            dispatch(LoadingActions.setLoading({ Error: error.Message }));
        }
    };
};

export const searchWeather = (city, units) => {
    return async (dispatch) => {
        dispatch(LoadingActions.setLoading({ Loading: true }));
        const fetchWeather = async (city = "delhi", units = "metric") => {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?appid=0bf56ee08bac780146f664ba875066a3&q=${city}&units=${units}`,
            );
            if (response.status === 404) throw new Error("Anime");
            else if (!response.ok) throw new Error("Anime");
            const data = await response.json();
            return extractWeatherDetails(data);
        };
        try {
            const data = await fetchWeather(city, units);
            dispatch(WeatherActions.setWeatherUnit({ unit: units }));
            dispatch(WeatherActions.setWeather({ data: data }));
            dispatch(LoadingActions.setLoading({ Loading: false }));
        } catch (err) {
            console.log(err);
            dispatch(LoadingActions.setError({ Error: "Not Found" }));
        }
    };
};

export default store;
