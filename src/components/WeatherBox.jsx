import React from "react";
import propTypes from "prop-types";
import AirIcon from "@mui/icons-material/Air";
import WaterIcon from "@mui/icons-material/Water";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import PlaceIcon from "@mui/icons-material/Place";

const WeatherBox = ({ index, theme, temp, tempType, heading, weather }) => {
  return (
    <div className={`box ${theme}`}>
      {index === 0 ? (
        <>
          <h2>{heading}</h2>
          <img src={weather} alt="Weather Icon" />
        </>
      ) : index === 2 ? (
        <>
          <h2>
            {heading}
            <ThermostatIcon />
          </h2>
          <h1>
            {tempType === "C" ? temp.cTemp : temp.fTemp}°{tempType}
          </h1>
        </>
      ) : index === 3 ? (
        <>
          <h2>
            {heading}
            <AirIcon />
          </h2>
          <h1>{weather}km/h</h1>
        </>
      ) : index === 4 ? (
        <>
          <h2>
            {heading}
            <WaterIcon />
          </h2>
          <h1>{weather}%</h1>
        </>
      ) : (
        <>
          <h2>
            {heading}
            <PlaceIcon />
          </h2>
          <h1>{weather}</h1>
        </>
      )}
    </div>
  );
};

WeatherBox.propTypes = {
  index: propTypes.number.isRequired,
  theme: propTypes.string.isRequired,
  temp: propTypes.string.isRequired,
  tempType: propTypes.string.isRequired,
  weather: propTypes.string.isRequired,
  heading: propTypes.string.isRequired,
};

export default WeatherBox;
