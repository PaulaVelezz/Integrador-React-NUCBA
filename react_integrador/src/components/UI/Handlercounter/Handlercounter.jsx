import React from 'react'
import {HandlercounterS} from "./HandlercounterStyles";



const Handlercounter = ({
    children,
    onClick = e => e.preventDefault(),
}) => {
  return (
    <HandlercounterS
        onClick={onClick}
        whileTap={{ scale: 0.95 }}
    >
        {children}
    </HandlercounterS>
  );
};

export default Handlercounter;