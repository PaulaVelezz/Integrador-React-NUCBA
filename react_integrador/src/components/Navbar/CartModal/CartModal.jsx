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


import Swal from "sweetalert2";


const CartModal = () => {

    const hiddenCart = useSelector(state => state.cart.hidden);
    const { cartItems } = useSelector (state => state.cart);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // const totalPrice = cartItems.reduce((acc, item) => {
    //     return (acc + item.price * item.quantity)
    // }, 0);

    const ConfirmFC = () => {
        Swal.fire({
            title: '¿Esta seguro que desea finalizar su compra?',
            icon: 'question',
            confirmButtonColor: '#30d675',
            confirmButtonText: 'Si!',
            showCancelButton: true,
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
        }).then((res) => {
            if (res.isConfirmed) {
            Swal.fire(
                'Finalizado!',
                'Su compra fue realizada con exito.',
                'success'
            )
            }
        })
    };


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
                        <CgCloseR size={'20px'} />

                    </CloseBtnCartS>
                </CloseBtnContainerS>

                <AllContentCartS>
                    <TitleCartS>
                        <h2>Your Order: </h2>
                        
                        <Handlercounter
                            onClick={() => dispatch(clearCart())}
                            disabled={!cartItems.length}
                        >
                            <RiDeleteBin5Fill size={'18px'} />
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
                        <span>$0000</span>
                    </TotalS>
                    
                    <CheckoutIpS>
                        <Submit 
                            onClick={() => {
                                ConfirmFC();
                                dispatch(toggleCart());
                            }}
                            disabled={!cartItems.length}
                            >
                            Finalizar Compra
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