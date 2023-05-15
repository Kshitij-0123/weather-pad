import { Link } from "react-router-dom";
import { Logo } from "../Assets/Icons";
import styles from "./NavBar.module.css";
const NavBar = ({ ...rest }) => {
  return (
    <div className={styles.NavBar}>
      <div className={styles.LogoNName}>
        <Logo />
        <h1>WeatherPad</h1>
      </div>
      <div className={styles.NavBarLinks}>
        <Link to="/">Home</Link>
        <Link to="/chart">Chart</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};
export default NavBar;
