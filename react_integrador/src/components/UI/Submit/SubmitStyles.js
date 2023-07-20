import styled from "styled-components";
import { motion } from "framer-motion";


export const BtnSubmitS = styled(motion.button)`
    padding: 7px 12px;
    outline: none;
    border: solid 1px black;
    border-radius: 7px;
    cursor: pointer;
    font-weight: 600;
    font-size: 15px;

    &:hover{
        background-color: orange;
    }
`;