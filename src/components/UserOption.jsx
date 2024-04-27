import { Stack, Fab, Divider } from "@mui/material";
import { DarkMode, Brightness7 } from "@mui/icons-material";
import React from "react";
import propTypes from "prop-types";

// This component is used to show option box for theme and temperature and rendered content accordingly
const UserOptionBox = ({
  theme,
  tempType,
  onChangeToLightTheme,
  onChangeToDarkTheme,
  onChangeTempToC,
  onChangeTempToF,
}) => {
  // This function calls the `onChangeToLightTheme` to change dark theme to light theme
  const handleLightTheme = () => {
    onChangeToLightTheme();
  };

  // This function calls the `onChangeToDarkTheme` to change dark theme to dark theme
  const handleDarkTheme = () => {
    onChangeToDarkTheme();
  };

  // This function calls the `onChangeTempToC` to change temperature from farenheit to celsius
  const handleCelcius = () => {
    onChangeTempToC();
  };

  // This function calls the `onChangeTempToF` to change temperature from celsius to farenheit
  const handleFarenheit = () => {
    onChangeTempToF();
  };

  if (theme === "light") {
    // Component return it if it is light theme and temperature type is celcius
    if (tempType === "C") {
      return (
        <Stack
          className={`user-option-box ${theme}`}
          direction="row"
          spacing={1}
        >
          <Fab className={`${theme} active`} onClick={handleCelcius}>
            °C
          </Fab>
          <Fab className={theme} onClick={handleFarenheit}>
            °F
          </Fab>
          <Divider orientation="vertical" className="divider" flexItem />
          <Fab className={`${theme} active`} onClick={handleLightTheme}>
            <Brightness7 onClick={handleLightTheme} />
          </Fab>
          <Fab className={theme} onClick={handleDarkTheme}>
            <DarkMode onClick={handleDarkTheme} />
          </Fab>
        </Stack>
      );
      // Component return it if it is light theme and temperature type is farenheit
    } else if (tempType === "F") {
      return (
        <Stack
          className={`user-option-box ${theme}`}
          direction="row"
          spacing={1}
        >
          <Fab className={theme} onClick={handleCelcius}>
            °C
          </Fab>
          <Fab className={`${theme} active`} onClick={handleFarenheit}>
            °F
          </Fab>
          <Divider orientation="vertical" className="divider" flexItem />
          <Fab className={`${theme} active`} onClick={handleLightTheme}>
            <Brightness7 onClick={handleLightTheme} />
          </Fab>
          <Fab className={theme} onClick={handleDarkTheme}>
            <DarkMode onClick={handleDarkTheme} />
          </Fab>
        </Stack>
      );
    }
  } else if (theme === "dark") {
    // Component return it if it is dark theme and temperature type is celcius
    if (tempType === "C") {
      return (
        <Stack
          className={`user-option-box ${theme}`}
          direction="row"
          spacing={1}
        >
          <Fab className={`${theme} active`} onClick={handleCelcius}>
            °C
          </Fab>
          <Fab className={theme} onClick={handleFarenheit}>
            °F
          </Fab>
          <Divider orientation="vertical" className="divider" flexItem />
          <Fab className={`${theme} active`} onClick={handleLightTheme}>
            <Brightness7 onClick={handleLightTheme} />
          </Fab>
          <Fab className={theme} onClick={handleDarkTheme}>
            <DarkMode onClick={handleDarkTheme} />
          </Fab>
        </Stack>
      );
      // Component return it if it is dark theme and temperature type is farenheit
    } else if (tempType === "F") {
      return (
        <Stack
          className={`user-option-box ${theme}`}
          direction="row"
          spacing={1}
        >
          <Fab className={theme} onClick={handleCelcius}>
            °C
          </Fab>
          <Fab className={`${theme} active`} onClick={handleFarenheit}>
            °F
          </Fab>
          <Divider orientation="vertical" className="divider" flexItem />
          <Fab className={`${theme} active`} onClick={handleLightTheme}>
            <Brightness7 onClick={handleLightTheme} />
          </Fab>
          <Fab className={theme} onClick={handleDarkTheme}>
            <DarkMode onClick={handleDarkTheme} />
          </Fab>
        </Stack>
      );
    }
  }
};

// Validate Props
UserOptionBox.propTypes = {
  theme: propTypes.string.isRequired,
  tempType: propTypes.string.isRequired,
  onChangeToLightTheme: propTypes.func.isRequired,
  onChangeToDarkTheme: propTypes.func.isRequired,
  onChangeTempToC: propTypes.func.isRequired,
  onChangeTempToF: propTypes.func.isRequired,
};

export default UserOptionBox;
