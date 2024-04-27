import React from "react";
import propTypes from "prop-types";
import Button from "@mui/material/Button";

// This component is used to show that User disallow location access and give button to provide location access
const UserDenied = ({ theme, getUserPosition }) => {
  return (
    <h1 className={theme}>
      Give Location Access
      <Button variant="contained" onClick={getUserPosition}>
        Allow
      </Button>
    </h1>
  );
};

// Validate Props
UserDenied.propTypes = {
  theme: propTypes.string.isRequired,
  getUserPosition: propTypes.func.isRequired,
};

export default UserDenied;
