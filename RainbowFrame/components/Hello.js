import React from 'react';
import PropTypes from 'prop-types';


import RainbowFrame from './RainbowFrame';

class Hello extends React.Component {

  static propTypes = {
    colors: PropTypes.array.isRequired,
    deffreetext: PropTypes.string.isRequired,
  };

  render() {
    return (
      <RainbowFrame colors={this.props.colors}>
        {this.props.deffreetext}
      </RainbowFrame>
    );
  }
}

export default Hello;
