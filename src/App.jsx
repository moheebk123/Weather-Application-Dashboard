import React from "react";
import { useState } from "react";
import ContentBox from "./components/ContentBox";
import SearchBox from "./components/SearchBox";

const App = () => {
  // Saves weather history
  const [weatherHistory, setweatherHistory] = useState([]);

  // Used for theme
  const [theme, setTheme] = useState("light");

  // Used for Temperature Type, Celsius and Fahrenheit
  const [tempType, setTempType] = useState("C");

  // This function is used to update weather searched history
  const updateWeatherHistory = (newWeatherHistory) => {
    setweatherHistory((prev) => {
      return [newWeatherHistory, ...prev];
    });
  };

  // This function is used to toggle theme from dark to light
  const changeToLightTheme = () => {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    const root = document.body.querySelector("#root");
    root.classList.remove("dark");
    root.classList.add("light");
    setTheme("light");
  };

  // This function is used to toggle theme from light to dark
  const changeToDarkTheme = () => {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    const root = document.body.querySelector("#root");
    root.classList.remove("light");
    root.classList.add("dark");
    setTheme("dark");
  };

  // This function is used to toggle temperature from Farenhite to Celsius
  const changeTempToC = () => {
    setTempType("C");
  };

  // This function is used to toggle temperature from Celsius to Farenhite
  const changeTempToF = () => {
    setTempType("F");
  };

  return (
    <>
      <SearchBox
        theme={theme}
        tempType={tempType}
        onUpdate={updateWeatherHistory}
      />
      <ContentBox
        theme={theme}
        tempType={tempType}
        onChangeToLightTheme={changeToLightTheme}
        onChangeToDarkTheme={changeToDarkTheme}
        onChangeTempToC={changeTempToC}
        onChangeTempToF={changeTempToF}
        weatherHistory={weatherHistory}
      />
    </>
  );
};

export default App;
