import { Link, useLocation } from "react-router-dom";
import { Logo } from "../Assets/Icons";
import styles from "./NavBar.module.css";
const NavBar = ({ ...rest }) => {
  const location = useLocation();
  const activePath = location.pathname;
  return (
    <div className={styles.NavBar}>
      <div className={styles.LogoNName}>
        <Logo />
        <h1>WeatherPad</h1>
      </div>
      <div className={styles.NavBarLinks}>
        <Link
          className={`${styles.navLink} ${
            activePath === "/" ? styles.active : ""
          }`}
          to="/"
        >
          Home
        </Link>
        <Link
          className={`${styles.navLink} ${
            activePath === "/chart" ? styles.active : ""
          }`}
          to="/chart"
        >
          Chart
        </Link>
        <Link
          className={`${styles.navLink} ${
            activePath === "/map" ? styles.active : ""
          }`}
          to="/map"
        >
          Map
        </Link>
        <Link
          className={`${styles.navLink} ${
            activePath === "/about" ? styles.active : ""
          }`}
          to="/about"
        >
          About
        </Link>
      </div>
    </div>
  );
};
export default NavBar;
