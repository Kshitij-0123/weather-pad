import { createSlice } from "@reduxjs/toolkit";

const WeatherSlice = createSlice({
    name: "weather",
    initialState: {
        Coordinates: { latitude: 0, longitude: 0 },
        Details: {
            Main: { Temperature: 0, Pressure: 0, Humidity: 0 },
            Wind: { Speed: 0, Degrees: 0, Gust: 0 },
            Weather: { Description: "", Icon: "01n", Main: "Haze" },
            Details: { Country: "", City: "" },
        },
        unit: "metric",
    },
    reducers: {
        setWeather: (state, action) => {
            state.Coordinates = action.payload.data.Coordinates;
            state.Details = action.payload.data.Details;
        },
        setWeatherUnit: (state, action) => {
            state.unit = action.payload.unit;
        },
    },
});

export const WeatherActions = WeatherSlice.actions;

export default WeatherSlice;
