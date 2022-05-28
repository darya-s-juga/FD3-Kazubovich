import React from 'react';

const withRainbowFrame = colors => Comp => {
  
  class CompwithRainbowFrame extends React.Component {
    
    render() {
      let code=<Comp {...this.props}
      defcaption1={'я из лесу'} defcaption2={'мороз'} />;
      colors.forEach(color =>
        code=<div style={{borderColor: color, borderStyle:'solid', padding:"10px", textAlign: 'center'}}>
        {code}
      </div>
      )
      return (code);   
    }
  }
  return CompwithRainbowFrame;
}

export { withRainbowFrame };
