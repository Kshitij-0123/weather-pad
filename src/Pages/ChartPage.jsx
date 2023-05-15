import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LineChart from "../Components/Line Chart/LineChart";

const allDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const ChartPage = () => {
  const [Data, setData] = useState({
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        id: "morning",
        label: "Morning_Temperature",
        data: [0, 0, 0, 0, 0],
        backgroundColor: "transparent",
        borderColor: "red",
        borderWidth: 4,
      },
      {
        id: "night",
        label: "Night_Temperature",
        data: [0, 0, 0, 0, 0],
        backgroundColor: "transparent",
        borderColor: "blue",
        borderWidth: 4,
      },
    ],
  });
  const Coords = useSelector((state) => state.weather.Coordinates);
  const Unit = useSelector((state) => state.weather.unit);
  useEffect(() => {
    const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${Coords.latitude}&lon=${Coords.longitude}&cnt=50&appid=0bf56ee08bac780146f664ba875066a3&units=${Unit}`;
    const fetchData = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      let days = new Set();
      let Temp_main_morn = [];
      let Temp_main_night = [];
      for (let i = 0; i < data.list.length; i++) {
        let day = data.list[i].dt_txt.slice(0, 11);
        let hour = data.list[i].dt_txt.slice(11, 13);
        days.add(allDay[new Date(day).getDay()]);
        if (hour === "09") Temp_main_morn.push(data.list[i].main.temp);
        else if (hour === "21") Temp_main_night.push(data.list[i].main.temp);
      }
      console.log(days);
      const label = Array.from(days);

      setData({
        labels: label,
        datasets: [
          {
            label: "Morning Temperature",
            data: Temp_main_morn,
            backgroundColor: "#000000bb",
            borderColor: "orange",
            borderWidth: 4,
          },
          {
            label: "Night Temperature",
            data: Temp_main_night,
            backgroundColor: "#ffffffbb",
            borderColor: "midnightblue",
            borderWidth: 4,
          },
        ],
      });
    };

    fetchData();
  }, [Coords]);
  return (
    <div>
      <LineChart data={Data} />
    </div>
  );
};
export default ChartPage;
