import React from 'react';
import PropTypes from 'prop-types';


import RainbowFrame from './RainbowFrame';

class DoubleButton extends React.Component {

  // caption1="однажды" caption2="пору" cbPressed={ num => alert(num) } >
  render() {
    return (
      <RainbowFrame colors={this.props.colors}>
        <input type='button' value={this.props.defcaption1}></input>
        {this.props.defanytext}
        <input type='button'  value={this.props.defcaption2}></input>
      </RainbowFrame>
    );
  }
}

export default DoubleButton;
