import React from 'react';
import PropTypes from 'prop-types';

class RainbowFrame extends React.Component {

  static propTypes = {
    colors: PropTypes.array.isRequired,
  };
  

  render() {
    let code=this.props.children;
     this.props.colors.forEach(color =>
      code=<div style={{borderColor: color, borderStyle:'solid', padding:"10px", textAlign: 'center'}}>
      {code}
    </div>
     )
    return (code);   
  }
}

export default RainbowFrame;
