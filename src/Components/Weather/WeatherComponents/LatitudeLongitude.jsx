import { useSelector } from "react-redux";
import Card from "../../UI/Card";

const LatitudeLongitude = ({ isLoading, visibility }) => {
    const Data = useSelector((state) => state.weather.Coordinates);
    return (
        <Card
            data-visible={visibility}
            borderRadius="50%"
            font={"'Cormorant SC', serif"}
        >
            <h1>{isLoading ? "Loading" : Data.latitude.toFixed(3)}</h1>
            <h1>{isLoading ? "Loading" : Data.longitude.toFixed(3)}</h1>
            <h6>Latitude and Longitude</h6>
        </Card>
    );
};

export default LatitudeLongitude;
