import React from 'react';
import PropTypes from 'prop-types';

  // import withRainbowFrame from './withRainbowFrame';

class DoubleButton extends React.Component {

  buttonPressed = (EO) => {
    this.props.cbPressed({key});
  }

  render() {
    return (
      <div>
        <input type='button' defaultValue={this.props.defcaption1} key={1}
          onClick={this.buttonPressed}></input>
        {this.props.children}
        <input type='button'  defaultValue={this.props.defcaption2} key={2}
           onClick={this.buttonPressed}></input>
      </div>
    );
  }
}

export default DoubleButton;
