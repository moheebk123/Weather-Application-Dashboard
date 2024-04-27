import mist from "../assets/mist.gif";
import clear from "../assets/clear.gif";
import clouds from "../assets/clouds.gif";
import haze from "../assets/haze.gif";
import smoke from "../assets/smoke.gif";
import snow from "../assets/snow.gif";
import rain from "../assets/rain.gif";
import dust from "../assets/dust.gif";
import thunderStorm from "../assets/thunderstorm.gif";
import SearchIcon from "@mui/icons-material/Search";
import AirIcon from "@mui/icons-material/Air";
import WaterIcon from "@mui/icons-material/Water";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import PlaceIcon from "@mui/icons-material/Place";
import axios from "axios";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import propTypes from "prop-types";

const SearchBox = ({ theme, tempType, onUpdate }) => {
  const apiKey = "09afd4ca0275624aa322a24eefcd9082";
  const [searchCity, setSearchCity] = useState("");
  const [weather, setWeather] = useState("");
  const [searchedWeather, setSearchWeather] = useState({
    city: "",
    cTemp: "",
    fTemp: "",
    wind: "",
    humid: "",
    icon: "",
  });

  const updateHistory = (icon, cTemp, fTemp, city) => {
    const date = new Date();
    const curDate = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const searchDate = `${curDate}/${month}/${year}`;
    const newWeatherHistory = { searchDate, icon, cTemp, fTemp, city };
    onUpdate(newWeatherHistory);
  };

  const searchWeather = async () => {
    const api = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apiKey}&q=${searchCity}`;
    setSearchCity("");

    const res = await axios.get(api);
    const data = res.data;
    const icon = data.weather[0].main;
    const cTemp = data.main.temp;
    const newHumid = data.main.humidity;
    const newWind = data.wind.speed;
    const newCity = data.name;
    const fTemp = ((9 / 5) * Number(cTemp) + 32).toFixed(2);
    updateHistory(icon, cTemp, fTemp, newCity);
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

    setWeather(icon);

    setSearchWeather({
      city: newCity,
      cTemp: cTemp,
      fTemp: fTemp,
      wind: newWind,
      humid: newHumid,
      icon: newIcon,
    });
  };

  return (
    <div className={`search-container ${theme}`}>
      <div className={`search-box ${theme}`}>
        <input
          spellCheck="false"
          placeholder="Search Weather"
          value={searchCity}
          onChange={(event) => setSearchCity(event.target.value)}
        />
        <Divider
          orientation="vertical"
          flexItem
          sx={{ backgroundColor: "white" }}
        />
        <SearchIcon onClick={searchWeather} sx={{ cursor: "pointer" }} />
      </div>
      <div className="parent-box">
        <div className={`box weather-box ${theme}`}>
          <img src={searchedWeather.icon} />
          <h2>{weather}</h2>
        </div>
        <div className={`box ${theme}`}>
          <p>
            City
            <PlaceIcon />
          </p>
          <h1>{searchedWeather.city}</h1>
        </div>
        <div className={`box ${theme}`}>
          <p>
            Temperature
            <ThermostatIcon />
          </p>
          <h1>
            {tempType === "C" ? searchedWeather.cTemp : searchedWeather.fTemp}°
            {tempType}
          </h1>
        </div>
        <div className={`box ${theme}`}>
          <p>
            Wind
            <AirIcon />
          </p>
          <h2>{searchedWeather.wind} km/h</h2>
        </div>
        <div className={`box ${theme}`}>
          <p>
            Humidity
            <WaterIcon />
          </p>
          <h2>{searchedWeather.humid}%</h2>
        </div>
      </div>
    </div>
  );
};

SearchBox.propTypes = {
  theme: propTypes.string.isRequired,
  tempType: propTypes.string.isRequired,
  onUpdate: propTypes.func.isRequired,
};

export default SearchBox;
