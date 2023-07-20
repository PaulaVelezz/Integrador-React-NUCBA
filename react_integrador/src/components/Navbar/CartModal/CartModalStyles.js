import styled, { css } from "styled-components";
import { motion } from "framer-motion";


//card carito
export const ProductCartContainerS = styled.div`
    display: flex ;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    background-color: black;
    border: solid 1px black;
    border-radius: 7px;

    &img{
        width: 60px;
        height: 60px;
        object-fit: cover;
    }
`;

export const InfoProductCartS = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
`;

export const QuantityHandlerS = styled.div`
    display: flex;
    align-items: center;
`;

// modal carrito 

export const CartModalContainerS = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 400px;
    height: calc(100vh - 2rem);
    background-color: whitesmoke;
    border-radius: 7px;

`;

export const CloseBtnContainerS = styled.div`
    height: 30px;
`;

export const CloseBtnCartS = styled(motion.button)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1rem;
    outline: none;
    border: solid 1px black;
    color: red;
    cursor: pointer;
    background: yellow;
`;

export const AllContentCartS = styled.div`
    height: 50%;
`;

export const TitleCartS = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

export const WrapperCartS = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 300px;
    margin: auto;
    overflow: scroll;
`;

export const BottomContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const TotalS = styled(BottomContainer)`
`;

export const CheckoutIpS = styled.div`
`;

export const ModalOverlayS = styled(motion.div)`
    position: fixed;
    top: 0;
    z-index: 45;
    width: calc(100vh - 400px);
    height: 100vh;

    ${({ isHidden }) =>
        !isHidden && 
        css`
            backdrop-filter: blur(5px);
        `}
`;