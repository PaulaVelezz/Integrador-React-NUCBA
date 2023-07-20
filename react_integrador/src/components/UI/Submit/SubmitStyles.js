import styled from "styled-components";
import { motion } from "framer-motion";


export const BtnSubmitS = styled(motion.button)`
    background-color: var(--bg-naranjita);
    box-shadow: #094c66 4px 4px 0px;
    border-radius: 8px;
    padding: 7px 12px;
    outline: none;
    border: solid 1px black;
    cursor: pointer;
    font-weight: 600;
    font-size: 15px;
    letter-spacing: 1px;
    transition: transform 200ms, box-shadow 200ms;

    &:active{
        transform: translateY(4px) translateX(4px);
        box-shadow: #094c66 0px 0px 0px;
    }
`;