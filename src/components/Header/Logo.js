import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSun
  } from "@fortawesome/free-solid-svg-icons";

 
  
  const Logo = ({className}) => {
      return (
        <FontAwesomeIcon icon={faSun} className={className} />
      )
  }
  
  export default Logo
  