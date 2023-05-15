import styles from "./Background.module.css";
const ImgNames = [
    "Ash",
    "Clear",
    "Clouds",
    "Drizzle",
    "Dust",
    "Haze",
    "Fog",
    "Mist",
    "Rain",
    "Sand",
    "Smoke",
    "Snow",
    "Squall",
    "Thunderstorm",
    "Tornado",
];
const Background = ({ currWeather = "Mist", visiblity = true }) => {
    return (
        <ul className={styles.backgroundImage}>
            {ImgNames.map((name) => {
                return (
                    <li
                        key={name}
                        id={name}
                        className={currWeather === name ? styles.activeBg : ""}
                    >
                        <img
                            src={require(`../../../images/Background/${name}.jpg`)}
                            alt={name}
                        />
                    </li>
                );
            })}
        </ul>
    );
};

export default Background;
