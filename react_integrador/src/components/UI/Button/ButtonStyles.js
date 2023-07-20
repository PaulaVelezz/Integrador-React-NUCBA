import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ButtonS =  styled(motion.button)`
    background-color: #141414;
    color: whitesmoke;
    outline: none;
    border-radius: 9px;
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
    padding: 7px 12px;
    border: 2px solid #141414;
    cursor: pointer;

    &:hover{
        background-color: #FF6600;
        color: whitesmoke;
    }
`;