import UserWeather from "./UserWeather";
import WeatherHistory from "./WeatherHistory";
import React from "react";
import propTypes from "prop-types";

const ContentBox = ({
  weatherHistory,
  theme,
  tempType,
  onChangeToLightTheme,
  onChangeToDarkTheme,
  onChangeTempToC,
  onChangeTempToF,
}) => {
  return (
    <div className={`content-box ${theme}`}>
      <UserWeather
        theme={theme}
        tempType={tempType}
        onChangeTempToC={onChangeTempToC}
        onChangeTempToF={onChangeTempToF}
        onChangeToLightTheme={onChangeToLightTheme}
        onChangeToDarkTheme={onChangeToDarkTheme}
      />
      <WeatherHistory
        theme={theme}
        tempType={tempType}
        weatherHistory={weatherHistory}
      />
    </div>
  );
};

ContentBox.propTypes = {
  weatherHistory: propTypes.array.isRequired,
  theme: propTypes.string.isRequired,
  tempType: propTypes.string.isRequired,
  onChangeTempToC: propTypes.func.isRequired,
  onChangeTempToF: propTypes.func.isRequired,
  onChangeToLightTheme: propTypes.func.isRequired,
  onChangeToDarkTheme: propTypes.func.isRequired,
};

export default ContentBox;
