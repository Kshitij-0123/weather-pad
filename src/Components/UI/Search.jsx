import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { searchWeather } from "../../Store";
import { WeatherActions } from "../../Store/WeatherSlice";
import styles from "./Search.module.css";
const Search = ({ visibility }) => {
    const ipRef = useRef();
    const unitRef = useRef();
    const [isTouched, setIsTouched] = useState(false);
    const dispatch = useDispatch();
    const SubmitHandler = (event) => {
        event.preventDefault();
        console.log(unitRef.current.value);
        if (!isTouched && ipRef.current.value === "") {
            setIsTouched(true);
            return;
        }
        dispatch(WeatherActions.setWeatherUnit(unitRef.current.value));
        dispatch(searchWeather(ipRef.current.value, unitRef.current.value));
        ipRef.current.value = "";
    };
    return (
        <form
            data-visible={visibility}
            className={styles.form}
            onSubmit={SubmitHandler}
        >
            <input ref={ipRef} type="text" name="" id="" placeholder="Search" />
            <select
                ref={unitRef}
                name="units"
                id="unitDropdown"
                defaultValue={"metric"}
                className={styles.unitDropdown}
            >
                <option value="metric">MTR</option>
                <option value="imperial">IMP</option>
                <option value="standard">STD</option>
            </select>
        </form>
    );
};
export default Search;
