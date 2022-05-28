import React from 'react';
import PropTypes from 'prop-types';


import DoubleButton from './DoubleButton';
import { withRainbowFrame } from './withRainbowFrame';

class TextBlock extends React.Component {

    buttonPressed = (num) => {
        alert(num);
    };

    render() {
    let FramedDoubleButton=withRainbowFrame(this.props.colors)(DoubleButton);
    return (
        <FramedDoubleButton defcaption1= {this.props.defcaption1} defcaption2= {this.props.defcaption2} 
        cbPressed={this.buttonPressed} >
            {this.props.defanytext}    
        </FramedDoubleButton>
    );
  }
}

export default TextBlock;