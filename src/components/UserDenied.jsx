import propTypes from 'prop-types'
import Button from "@mui/material/Button";

const UserDenied = ({theme, getUserPosition}) => {
  return (
    <h1 className={ theme}>
      Give Location Access
      <Button variant="contained" onClick={getUserPosition}>
        Allow
      </Button>
    </h1>
  );
}

UserDenied.propTypes = {
  theme: propTypes.string.isRequired,
  getUserPosition: propTypes.func.isRequired,
};

export default UserDenied;
