import { useSelector } from "react-redux";
import styles from "./Weather.module.css";
import Details from "./WeatherComponents/Details";
import LatitudeLongitude from "./WeatherComponents/LatitudeLongitude";
import { DateChecker, UnitChecker } from "./WeatherHelper";
const Weather = ({ visibility, ...rest }) => {
  const unitType = useSelector((state) => state.weather.unit);
  const data = useSelector((state) => {
    return {
      city: state.weather.Details.Details.City,
    };
  });
  const units = UnitChecker(unitType);
  const date = DateChecker(unitType);
  const isLoading = useSelector((state) => state.Loading);
  return (
    <>
      <div data-visible={visibility} className={styles.WeatherCard}>
        <div data-visible={visibility} className={styles.Date}>
          <h3>{date.date}</h3>
          <h5>{date.day}</h5>
          <h1 style={{ marginTop: "8px" }}>{data.city}</h1>
        </div>
        <LatitudeLongitude visibility={visibility} isLoading={isLoading} />
        <Details visibility={visibility} units={units} isLoading={isLoading} />
      </div>
    </>
  );
};

export default Weather;
