import React, { PropTypes } from 'react';
import Spinner from 'react-spinkit';
import MDButton from 'mdbutton';

const MDButtonWithSpinner = (props) => {
  const {
    onClick,
    buttonTheme,
    isDisabled,
    children,
    showSpinner,
  } = props;

  const buttonProps = {};

  if (!!onClick) { buttonProps.onClick = onClick; }
  if (!!buttonTheme) { buttonProps.theme = buttonTheme; }
  if (!!isDisabled) { buttonProps.isDisabled = isDisabled; }

  let content;
  if (!!showSpinner) {
    content = <Spinner spinnerName="pulse" />;
  } else {
    content = <MDButton {...buttonProps} > { children } </MDButton>;
  }
  return content;
};

MDButtonWithSpinner.propTypes = {
  onClick: PropTypes.func,
  showSpinner: PropTypes.bool,
  buttonTheme: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default MDButtonWithSpinner;
