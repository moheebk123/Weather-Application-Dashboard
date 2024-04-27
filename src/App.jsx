import React from 'react'
import { useState } from "react";
import ContentBox from "./components/ContentBox";
import SearchBox from "./components/SearchBox";

const App = () => {
  const [weatherHistory, setweatherHistory] = useState([]);
  const [theme, setTheme] = useState("light");
  const [tempType, setTempType] = useState("C");

  const updateWeatherHistory = (newWeatherHistory) => {
    setweatherHistory((prev) => {
      return [newWeatherHistory, ...prev];
    });
  };

  const changeToLightTheme = () => {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    const root = document.body.querySelector("#root");
    root.classList.remove("dark");
    root.classList.add("light");
    setTheme("light");
  };

  const changeToDarkTheme = () => {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    const root = document.body.querySelector("#root");
    root.classList.remove("light");
    root.classList.add("dark");
    setTheme("dark");
  };

  const changeTempToC = () => {
    setTempType("C");
  };

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
