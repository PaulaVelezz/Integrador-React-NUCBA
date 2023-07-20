import React from 'react';
import {BtnSubmitS} from "./SubmitStyles";


const Submit = ({ children, onClick}) => {
  return (
    <BtnSubmitS
        onClick={onClick}
        type="submit"
        whileTap={{ scale: 0.95 }}
    >
        {children}
    </BtnSubmitS>
  );
};

export default Submit;