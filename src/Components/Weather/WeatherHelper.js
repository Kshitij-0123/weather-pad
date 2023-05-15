export const UnitChecker = (val = "metric") => {
    if (val === "imperial")
        return {
            tempUnit: "°F",
            speedUnit: "MPH",
        };
    else if (val === "standard")
        return {
            tempUnit: "K",
            speedUnit: "m/s",
        };
    else
        return {
            tempUnit: "°C",
            speedUnit: "m/s",
        };
};

const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
];
const day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

export const DateChecker = (val) => {
    const d = new Date();
    const dateValue = `${d.getDate()} ${
        months[d.getMonth()]
    } ${d.getFullYear()}`;
    const dayValue = `${day[d.getDay()]}`;
    return {
        date: dateValue,
        day: dayValue,
    };
};
