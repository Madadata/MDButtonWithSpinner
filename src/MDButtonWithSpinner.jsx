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

  const buttonProps = {};

  if (!!onClick) { buttonProps.onClick = onClick; }
  if (!!buttonText) { buttonProps.text = buttonText; }
  if (!!buttonTheme) { buttonProps.theme = buttonTheme; }
  if (!!isDisabled) { buttonProps.isDisabled = isDisabled; }

  return (
    <MDButton {...buttonProps} >
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
