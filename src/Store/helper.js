export const extractWeatherDetails = (data) => {
    return {
        Coordinates: {
            latitude: data.coord.lat,
            longitude: data.coord.lon,
        },
        Details: {
            Main: {
                Temperature: data.main.temp,
                Pressure: data.main.pressure,
                Humidity: data.main.humidity,
            },
            Wind: {
                Speed: data.wind.speed,
                Degrees: data.wind.deg,
                Gust: data.wind.gust,
            },
            Weather: {
                Description: data.weather[0].description,
                Icon: data.weather[0].icon,
                Main: data.weather[0].main,
            },
            Details: { Country: data.sys.country, City: data.name },
        },
    };
};
