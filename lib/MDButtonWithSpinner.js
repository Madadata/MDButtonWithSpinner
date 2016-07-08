'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSpinkit = require('react-spinkit');

var _reactSpinkit2 = _interopRequireDefault(_reactSpinkit);

var _mdbutton = require('mdbutton');

var _mdbutton2 = _interopRequireDefault(_mdbutton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MDButtonWithSpinner = function MDButtonWithSpinner(props) {
  var onClick = props.onClick;
  var buttonTheme = props.buttonTheme;
  var isDisabled = props.isDisabled;
  var children = props.children;
  var showSpinner = props.showSpinner;


  var buttonProps = {};

  if (!!onClick) {
    buttonProps.onClick = onClick;
  }
  if (!!buttonTheme) {
    buttonProps.theme = buttonTheme;
  }
  if (!!isDisabled) {
    buttonProps.isDisabled = isDisabled;
  }

  var content = void 0;
  if (!!showSpinner) {
    content = _react2.default.createElement(_reactSpinkit2.default, { spinnerName: 'pulse' });
  } else {
    content = _react2.default.createElement(
      _mdbutton2.default,
      buttonProps,
      children
    );
  }
  return content;
};

MDButtonWithSpinner.propTypes = {
  onClick: _react.PropTypes.func,
  showSpinner: _react.PropTypes.bool,
  buttonTheme: _react.PropTypes.string,
  isDisabled: _react.PropTypes.bool
};

exports.default = MDButtonWithSpinner;