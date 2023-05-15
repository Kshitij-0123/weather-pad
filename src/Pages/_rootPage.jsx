import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { DropDown } from "../Components/Assets/Icons";
import Notification from "../Components/Notification/Notification";
import { Outlet } from "react-router-dom";
import Search from "../Components/UI/Search";
import Weather from "../Components/Weather/Weather";
import Background from "../Components/Weather/WeatherComponents/Background";
import { getWeather } from "../Store";
import styles from "./RootPage.module.css";
import NavBar from "../Components/NavBar/NavBar";

export default function Root({ children }) {
  const weatherType = useSelector(
    (state) => state.weather.Details.Weather.Main,
  );
  console.log(children);
  const dispatch = useDispatch();
  const [weatherVisible, setWeatherVisible] = useState(true);
  useEffect(() => {
    dispatch(getWeather());
  }, [dispatch]);

  const visibilityChangeHandler = () => setWeatherVisible(!weatherVisible);
  return (
    <>
      <Background currWeather={weatherType} />
      <button
        onClick={visibilityChangeHandler}
        style={{
          backgroundColor: "transparent",
          border: "none",
          position: "absolute",
          left: "50%",
          zIndex: 10,
          transform: `translateX(-50%) ${
            weatherVisible ? "rotate(180deg)" : "rotate(0deg)"
          }`,
        }}
      >
        <DropDown />
      </button>

      <CSSTransition
        unmountOnExit
        mountOnEnter
        in={weatherVisible}
        timeout={2000}
        classNames={{
          enterActive: styles.enterActive,
          exitActive: styles.exitActive,
        }}
      >
        <div className={styles.HomePageA}>
          <Search visibility={weatherVisible} />
          <Notification />
          <Weather visibility={weatherVisible} />
        </div>
      </CSSTransition>

      <CSSTransition
        unmountOnExit
        mountOnEnter
        in={!weatherVisible}
        timeout={2000}
        classNames={{
          enterActive: styles.enterActive,
          exitActive: styles.exitActive,
        }}
      >
        <div className={styles.HomePageB}>
          <NavBar />
          <Outlet />
        </div>
      </CSSTransition>
    </>
  );
}
