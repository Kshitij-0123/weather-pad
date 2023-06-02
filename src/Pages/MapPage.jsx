import React, { useEffect } from "react";
import * as LEAF from "leaflet";
import { useSelector } from "react-redux";
import { setLayers, setViewlatlong, changeLatlon } from "./Map Helper";
import { motion } from "framer-motion";

const MapPage = () => {
  const URL = "https://api.openweathermap.org/data/2.5/weather?appid=";
  const apiKey = "ff6c77ac648e0989c3cd2293bfe5a4e0";
  const lat = useSelector((state) => state.weather.Coordinates.latitude);
  const lon = useSelector((state) => state.weather.Coordinates.longitude);
  console.log(lat, lon);
  useEffect(() => {
    const singleMarker = LEAF.marker([lat, lon]);
    const map = LEAF.map("mapContainer", { attributionControl: false });
    console.log(map);
    setLayers(lat, lon, map, singleMarker);
    const loadMap = () => {
      const fetchURL = `${URL}${apiKey}&lat=${lat}&lon=${lon}&units=metric#`;
      fetch(fetchURL)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setViewlatlong(lat, lon, map);
          changeLatlon(singleMarker, data);
        })
        .catch((error) => {
          console.log(error.message);
          alert("Enter valid name");
        });
    };
    loadMap();
  }, [lat, lon]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      id="mapContainer"
    />
  );
};

export default MapPage;
