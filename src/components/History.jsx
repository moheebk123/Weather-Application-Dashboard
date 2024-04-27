import React from "react";
import propTypes from "prop-types";
import mist from "../assets/mist.gif";
import clear from "../assets/clear.gif";
import clouds from "../assets/clouds.gif";
import haze from "../assets/haze.gif";
import smoke from "../assets/smoke.gif";
import snow from "../assets/snow.gif";
import rain from "../assets/rain.gif";
import dust from "../assets/dust.gif";
import thunderStorm from "../assets/thunderstorm.gif";

const History = ({ theme, tempType, searchDate, icon, cTemp, fTemp, city }) => {
  let newIcon;
  if (icon === "Clear") {
    newIcon = clear;
  } else if (icon === "Cloud" || icon === "Clouds") {
    newIcon = clouds;
  } else if (icon === "Mist") {
    newIcon = mist;
  } else if (icon === "Haze") {
    newIcon = haze;
  } else if (icon === "Smoke") {
    newIcon = smoke;
  } else if (icon === "Snow") {
    newIcon = snow;
  } else if (icon === "Rain") {
    newIcon = rain;
  } else if (icon === "Thunderstorm") {
    newIcon = thunderStorm;
  } else if (icon === "Dust") {
    newIcon = dust;
  }

  return (
    <div className={`box ${theme}`}>
      <p>{searchDate}</p>
      <img src={newIcon} />
      <h2>
        {tempType === "C" ? cTemp : fTemp}°{tempType}
      </h2>
      <h2>{city}</h2>
    </div>
  );
};

History.propTypes = {
  theme: propTypes.string.isRequired,
  tempType: propTypes.string.isRequired,
  searchDate: propTypes.string.isRequired,
  icon: propTypes.string.isRequired,
  cTemp: propTypes.string.isRequired,
  fTemp: propTypes.string.isRequired,
  city: propTypes.string.isRequired,
};

export default History;
