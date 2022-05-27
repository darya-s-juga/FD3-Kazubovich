import React from 'react';
import PropTypes from 'prop-types';


class Text extends React.Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
  };

  render() {
    let textBr=[];
    let words=this.props.text.split(/<br *\/?>/);

    words.forEach( (word,i) =>{
      if (i) 
        textBr.push(<br key={i}/>);
      textBr.push(word);
    });
     
    return (
      <div>{textBr}</div>  
    );
  }
}

export default Text;
