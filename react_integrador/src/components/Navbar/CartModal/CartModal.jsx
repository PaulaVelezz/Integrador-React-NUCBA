import React from 'react';
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import { CgCloseR } from "react-icons/cg";
import { RiDeleteBin5Fill } from "react-icons/ri";

import { AllContentCartS, BottomContainer, CartModalContainerS, 
    CheckoutIpS, CloseBtnCartS, CloseBtnContainerS, TotalS, 
    WrapperCartS, TitleCartS, ModalOverlayS } from './CartModalStyles';

import CartModalCard from "./CartModalCard";
import Handlercounter from "../../UI/Handlercounter/Handlercounter";
import Submit from "../../UI/Submit/Submit";
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart, clearCart } from '../../../redux/cart_carrito/cartSlice';



const CartModal = () => {

    const hiddenCart = useSelector(state => state.cart.hidden);
    const cartItems = useSelector (state => state.cart);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const totalPrice = cartItems.reduce((acc, item) => {
        return (acc += item.price * item.quantity);
    }, 0);


  return (
    <>
        {!hiddenCart && (
            <ModalOverlayS
            onClick={() => dispatch(toggleCart())}
            isHidden={hiddenCart}
            />
        )}

        <AnimatePresence>
            {!hiddenCart && (
               <CartModalContainerS
                initial={{ translateX: 600 }}
                animate={{ translateX: 0 }}
                exit={{ translateX: 600 }}
                transition={{ type: 'spring', damping: 20 }}
               >

                <CloseBtnContainerS>
                    <CloseBtnCartS
                    whileTap={{ scale: 0.95 }}
                    onClick={() => dispatch(toggleCart())}
                    >
                        <CgCloseR size={'18px'} />

                    </CloseBtnCartS>
                </CloseBtnContainerS>

                <AllContentCartS>
                    <TitleCartS>
                        <h2>your order</h2>
                
                        <Handlercounter
                            onClick={() => dispatch(clearCart())}
                        >
                            <RiDeleteBin5Fill/>
                        </Handlercounter>
                    </TitleCartS>

                    <WrapperCartS>
                        {cartItems.length ? (
                        cartItems.map((item) => {
                            return <CartModalCard {...item} key={item.id} />;
                        })
                        ) : (
                        <p>Tu carrito esta vacio.</p>
                        )}
                    </WrapperCartS>
                </AllContentCartS>
                
                <BottomContainer>
                    <hr />
                    <TotalS>
                        <p>Total:</p>
                        <span>${totalPrice}</span>
                    </TotalS>
                    
                    <CheckoutIpS>
                        <Submit 
                            onClick={() => {
                                navigate('/checkout');
                                dispatch(toggleCart());
                            }}
                            disabled={!cartItems.length}
                            >
                            Iniciar Compra
                        </Submit>
                    </CheckoutIpS>
                </BottomContainer>
               </CartModalContainerS>
            )}
        </AnimatePresence>
    </>
  );
};

export default CartModal;