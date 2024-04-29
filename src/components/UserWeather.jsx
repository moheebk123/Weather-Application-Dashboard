import axios from "axios";
import UserOption from "./UserOption";
import React, { useState } from "react";
import mist from "../assets/mist.gif";
import clear from "../assets/clear.gif";
import clouds from "../assets/clouds.gif";
import haze from "../assets/haze.gif";
import smoke from "../assets/smoke.gif";
import snow from "../assets/snow.gif";
import rain from "../assets/rain.gif";
import thunderStorm from "../assets/thunderstorm.gif";
import dust from "../assets/dust.gif";
import UserDenied from "./UserDenied";
import WeatherBox from "./WeatherBox";
import propTypes from "prop-types";

// This component is used to render Three Components,
// First Component is option box
// Second component, WeatherBox is rendered if user allowd location access
// Third component, UserDenied is rendered if user disable location access
const UserWeather = ({
  theme,
  tempType,
  onChangeToLightTheme,
  onChangeToDarkTheme,
  onChangeTempToC,
  onChangeTempToF,
}) => {
  const apiKey = "09afd4ca0275624aa322a24eefcd9082";

  // Used to validate that user allowed to get their position
  const [userAllowed, setUserAllowed] = useState();

  // Used to store celcius and farenheit temperature values of user weather
  const [temp, setTemp] = useState({ cTemp: "", fTemp: "" })

  // Used to store user weather information
  const [userWeather, setUserWeather] = useState([
    {
      icon: "",
      weather: "",
    },
    {
      heading: "City",
      weather: "",
    },
    {
      heading: "Temperature",
      weather: "",
    },
    {
      heading: "Wind",
      weather: "",
    },
    {
      heading: "Humidity",
      weather: "",
    },
  ]);

  // This function is used to search user weather information and set user weather information
  const searchUserWeather = async (userCity) => {
    const api = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apiKey}&q=${userCity}`;

    const res = await axios.get(api);
    const data = res.data;
    const icon = data.weather[0].main;
    const newTemp = data.main.temp;
    const newHumid = data.main.humidity;
    const newWind = data.wind.speed;
    const newCity = data.name;
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

    const fTemp = ((9 / 5) * Number(newTemp) + 32).toFixed(2);
    setTemp({cTemp: newTemp, fTemp: fTemp});

    setUserWeather([
      {
        heading: icon,
        weather: newIcon,
      },
      {
        heading: "City",
        weather: newCity,
      },
      {
        heading: "Temperature",
        weather: newTemp,
      },
      {
        heading: "Wind",
        weather: newWind,
      },
      {
        heading: "Humidity",
        weather: newHumid,
      },
    ]);
  };

  // This function is used to get user city by latitude and longitude and calls searchUserWeather function and pass city as an argument
  const getUserCity = async (latitude, longitude) => {
    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
    const res = await axios.get(api);
    const userCity = res.data.name;
    searchUserWeather(userCity);
  };

  // This function is used to get longitude and latitude of a user and calls getUserCity function and pass latitude and longitude as an argument
  const getUserPosition = async () => {
    setUserAllowed(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        getUserCity(latitude, longitude);
      },
      () => {
        setUserAllowed(false);
      }
    );
  };

  return (
    <div className="user-weather">
      <UserOption
        theme={theme}
        tempType={tempType}
        onChangeToLightTheme={onChangeToLightTheme}
        onChangeToDarkTheme={onChangeToDarkTheme}
        onChangeTempToC={onChangeTempToC}
        onChangeTempToF={onChangeTempToF}
      />
      <h2>Weather Highlights</h2>
      <h3>In you location</h3>
      <div className="user-weather-box">
        {userAllowed ? (
          userWeather.map((data, index) => {
            return (
              <WeatherBox
                key={index}
                index={index}
                theme={theme}
                tempType={tempType}
                temp={temp}
                weather={data.weather}
                heading={data.heading}
              />
            );
          })
        ) : (
          <UserDenied theme={theme} getUserPosition={getUserPosition} />
        )}
      </div>
    </div>
  );
};

// Validate Props
UserWeather.propTypes = {
  theme: propTypes.string.isRequired,
  tempType: propTypes.string.isRequired,
  onChangeTempToC: propTypes.func.isRequired,
  onChangeTempToF: propTypes.func.isRequired,
  onChangeToLightTheme: propTypes.func.isRequired,
  onChangeToDarkTheme: propTypes.func.isRequired,
};

export default UserWeather;
