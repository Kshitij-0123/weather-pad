// import Footer from "../../Components/Footer/Footer";
import Links from "../Components/UI/Links";
import { motion } from "framer-motion";

const HomePage = ({ weatherVisible }) => {
  return (
    <motion.div
      style={{
        backgroundColor: "#00000066",
        width: "70%",
        height: "80%",
        borderRadius: "5px",
        color: "#ffedcd",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        margin: "20px auto",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Links
        title="Chart"
        icon="bar-chart"
        visibility={!weatherVisible}
        path="Chart"
      >
        <p>
          A graph to predict the weather for the next 5 days with a very
          exciting and eye-catching UI using chart.js a modern javascript
          library. The API used is an excellent open-source API known as
          OpenWeatherMap
        </p>
      </Links>
      <Links
        title="Weather Map"
        icon="map-icon"
        alternate={true}
        visibility={!weatherVisible}
        path="Weather Map"
      >
        <p>
          We have used weather map 1.0 API to get tile layers for different
          weather map and encorporated it in openstreetmap as default. It give
          you weather information with marker pointing at your location.
        </p>
      </Links>
      <Links
        title="Weather Visualizer"
        icon="global-warming"
        visibility={!weatherVisible}
        path={null}
        anchor="https://classic.nullschool.net/#current/wind/primary/waves/overlay=temp/orthographic=87.75,7.57,336/loc=77.899,27.480"
      >
        <p>
          "earth" is a personal project by Cameron Beccario and Paul Irish based
          on the earlier Tokyo Wind Map project."earth" is a project to
          visualize global weather conditions. To access the site please press
          on the icon to the
          <span
            style={{
              color: "rgb(0 222 198)",
              fontSize: "22px",
            }}
          >
            left
          </span>
        </p>
        <p>
          --credits :
          <span
            style={{
              color: "rgb(0 222 198)",
              fontSize: "18px",
            }}
          >
            Cameron Beccario
          </span>
        </p>
      </Links>
    </motion.div>
  );
};

export default HomePage;
