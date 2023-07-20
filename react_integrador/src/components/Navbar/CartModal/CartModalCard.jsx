import React from 'react';
import { InfoProductCartS, ProductCartContainerS, QuantityHandlerS } from './CartModalStyles';
import Handlercounter from "../../UI/Handlercounter/Handlercounter";
import Count from "../../UI/Count/Count";
import {FaMinus, FaPlus} from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { addToCart, removeFCart } from '../../../redux/cart_carrito/cartSlice';



const CartModalCard = ({ img, title, price, quantity, id }) => {

  const dispatch = useDispatch();

  return (
    <ProductCartContainerS>
        <img src={img} alt={title} />  

        <InfoProductCartS>
            <h3>{title}</h3>
            <p>{price}</p>
        </InfoProductCartS>

        <QuantityHandlerS>
          <Handlercounter
            onClick={() => dispatch(removeFCart(id))}
          >
            {quantity === 1 ? <RiDeleteBin5Fill/> : <FaMinus/> }
          </Handlercounter>

          <Count>{quantity}</Count>

          <Handlercounter
            onClick={() => dispatch(addToCart({ img, title, price, quantity, id }))}
          >

            <FaPlus/>

          </Handlercounter>
        </QuantityHandlerS>
    </ProductCartContainerS>
  );
};

export default CartModalCard;