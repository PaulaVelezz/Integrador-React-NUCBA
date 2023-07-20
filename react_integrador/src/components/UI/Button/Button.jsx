import React from 'react';
import { ButtonS } from "./ButtonStyles";


const ButtonUI = ({
  children,
  onClick = e => e.preventDefault(),
}) => {

  return (
    <ButtonS 
        onClick={onClick}
        whileTap={{ scale: 0.95 }}
    >

      {children}
      
    </ButtonS>
  );
};

export default ButtonUI;