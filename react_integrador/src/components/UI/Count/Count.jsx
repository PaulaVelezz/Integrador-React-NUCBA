import React from 'react'
import { CountS } from "./CountStyles";


const Count = ({ children }) => {
  return (
    <CountS> 
        {children}
    </CountS>
  );
};

export default Count;