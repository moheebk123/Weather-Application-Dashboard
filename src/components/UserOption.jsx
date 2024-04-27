import { Stack, Fab, Divider } from "@mui/material";
import { DarkMode, Brightness7 } from "@mui/icons-material";
import React from "react";
import propTypes from "prop-types";

const UserOptionBox = ({
  theme,
  tempType,
  onChangeToLightTheme,
  onChangeToDarkTheme,
  onChangeTempToC,
  onChangeTempToF,
}) => {
  const handleLightTheme = () => {
    onChangeToLightTheme();
  };

  const handleDarkTheme = () => {
    onChangeToDarkTheme();
  };

  const handleCelcius = () => {
    onChangeTempToC();
  };

  const handleFarenheit = () => {
    onChangeTempToF();
  };

  if (theme === "light") {
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
          <Divider orientation="vertical" flexItem />
          <Fab className={`${theme} active`} onClick={handleLightTheme}>
            <Brightness7 onClick={handleLightTheme} />
          </Fab>
          <Fab className={theme} onClick={handleDarkTheme}>
            <DarkMode onClick={handleDarkTheme} />
          </Fab>
        </Stack>
      );
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
          <Divider orientation="vertical" flexItem />
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
          <Divider orientation="vertical" flexItem />
          <Fab className={`${theme} active`} onClick={handleLightTheme}>
            <Brightness7 onClick={handleLightTheme} />
          </Fab>
          <Fab className={theme} onClick={handleDarkTheme}>
            <DarkMode onClick={handleDarkTheme} />
          </Fab>
        </Stack>
      );
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
          <Divider orientation="vertical" flexItem />
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

UserOptionBox.propTypes = {
  theme: propTypes.string.isRequired,
  tempType: propTypes.string.isRequired,
  onChangeToLightTheme: propTypes.func.isRequired,
  onChangeToDarkTheme: propTypes.func.isRequired,
  onChangeTempToC: propTypes.func.isRequired,
  onChangeTempToF: propTypes.func.isRequired,
};

export default UserOptionBox;
