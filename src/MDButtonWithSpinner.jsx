import React, { PropTypes } from 'react';
import Spinner from 'react-spinkit';
import MDButton from 'mdbutton';

const MDButtonWithSpinner = (props) => {
  const {
    onClick,
    buttonText,
    buttonTheme,
    isDisabled,
  } = props;
  return (
    <MDButton
      onClick={ !!onClick ? onClick : null}
      theme={buttonTheme}
      isDisabled={isDisabled}
      text={buttonText}
    >
      <Spinner spinnerName="pulse" />
    </MDButton>
  );
};

MDButtonWithSpinner.propTypes = {
  onClick: PropTypes.func,
  isWaiting: PropTypes.bool,
  buttonText: PropTypes.string,
  buttonTheme: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default MDButtonWithSpinner;
