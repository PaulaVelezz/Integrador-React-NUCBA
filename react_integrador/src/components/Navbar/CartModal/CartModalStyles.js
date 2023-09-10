import styled, { css } from "styled-components";
import { motion } from "framer-motion";

//card carrito
export const ProductCartContainerS = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: auto;
  height: 120px;
  background-color: black;
  border: solid 1px orangered;
  border-radius: 7px;
  color: whitesmoke;
  text-align: center;
  padding: 10px;
  margin-bottom: 5px;

  & img {
    width: 90px;
    height: 90px;
    object-fit: cover;
    object-position: center;
  }

  @media (max-width: 425px) {
    width: 280px;

    & img {
      display: none;
    }
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
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 500px;
  height: calc(100vh - 2rem);
  background-color: whitesmoke;
  border-radius: 7px;

  @media (max-width: 768px) {
    width: 400px;
  }

  @media (max-width: 425px) {
    width: 300px;
  }
`;

export const CloseBtnContainerS = styled.div`
  display: flex;
  justify-content: left;
  padding: 7px;
`;

export const CloseBtnCartS = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  outline: none;
  border: 1px solid black;
  color: whitesmoke;
  cursor: pointer;
  background: red;
  border-radius: 8px;
`;

export const AllContentCartS = styled.div`
  height: 50%;
`;

export const TitleCartS = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 7px;
  color: #010101;
  border-bottom: solid 1px black;
`;

export const WrapperCartS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 300px;
  margin: auto;
  color: #010101;
  overflow: scroll;
  padding: 10px;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const TotalS = styled(BottomContainer)`
  display: flex;
  flex-direction: row;
  color: #010101;
  border: solid 1px #010101;
  justify-content: space-between;
  width: 80%;
  padding: 5px;
  font-weight: 500;
  border-radius: 5px;
`;

export const CheckoutIpS = styled.div``;

export const ModalOverlayS = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
  width: 100vw;
  height: 100vh;

  ${({ isHidden }) =>
    !isHidden &&
    css`
      backdrop-filter: blur(2px);
    `}
`;
