import React  from 'react';
import PropTypes from 'prop-types';

export const FormErrors = ({formErrors, key}) =>

  <span>{Object.keys(formErrors).map((fieldName, key) => {
          // if(formErrors[fieldName].length > 0){
            return (
              <span key={key}> {formErrors[fieldName]}</span>
            )        
          // } 
          // else {
          //   return '';
          // }
        }
        )
  }</span>


