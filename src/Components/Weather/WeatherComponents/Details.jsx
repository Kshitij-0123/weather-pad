import { useSelector } from "react-redux";
import Card from "../../UI/Card";
import styles from "./Details.module.css";
const Details = ({ visibility, units, ...rest }) => {
    const Data = useSelector((state) => state.weather.Details);
    return (
        <div className={styles.Details}>
            <Card data-visible={visibility} borderRadius="10px">
                <h1>
                    {Data.Main.Temperature}
                    {units.tempUnit}
                </h1>
                <h1>
                    {Data.Main.Temperature}
                    {units.tempUnit}
                </h1>
                <h1>
                    {Data.Main.Temperature}
                    {units.tempUnit}
                </h1>
            </Card>
            <Card data-visible={visibility} borderRadius="10px">
                <h1>
                    {Data.Wind.Speed} {units.speedUnit}
                </h1>
                <h1>{Data.Wind.Degrees} °</h1>
                <h1>
                    {Data.Wind.Gust} {units.speedUnit}
                </h1>
            </Card>
            <Card data-visible={visibility} borderRadius="10px">
                <h1>{Data.Weather.Description}</h1>
                <img
                    src={`https://openweathermap.org/img/wn/${Data.Weather.Icon}@2x.png`}
                    alt={Data.Weather.Description}
                />
            </Card>
            <Card data-visible={visibility} borderRadius="10px">
                <h1>{Data.Main.Pressure} mbr</h1>
                <h1>{Data.Main.Humidity} %</h1>
            </Card>
        </div>
    );
};
export default Details;
