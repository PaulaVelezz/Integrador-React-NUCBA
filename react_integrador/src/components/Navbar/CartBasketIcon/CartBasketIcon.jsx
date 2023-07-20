import React from 'react';
import { BsBasket } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { NavLinkS } from "../NavbarStyles";
import { toggleCart } from "../../../redux/cart_carrito/cartSlice";

const CartBasketIcon = () => {

    const dispatch = useDispatch()

  return (

    <NavLinkS onClick={() => dispatch(toggleCart())}>
        <BsBasket/>  
    </NavLinkS>
  );
};

export default CartBasketIcon;