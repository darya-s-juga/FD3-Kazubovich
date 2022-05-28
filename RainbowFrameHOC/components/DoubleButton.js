import React from 'react';
import PropTypes from 'prop-types';

  // import withRainbowFrame from './withRainbowFrame';

class DoubleButton extends React.Component {

  buttonPressed1 = () => {
    this.props.cbPressed(1);
  };

  buttonPressed2 = () => {
    this.props.cbPressed(2);
  };

  render() {
    return (
      <div>
        <input type='button' defaultValue={this.props.defcaption1}
          onClick={this.buttonPressed1}></input>
        {this.props.children}
        <input type='button'  defaultValue={this.props.defcaption2}
           onClick={this.buttonPressed2}></input>
      </div>
    );
  }
}

export default DoubleButton;
