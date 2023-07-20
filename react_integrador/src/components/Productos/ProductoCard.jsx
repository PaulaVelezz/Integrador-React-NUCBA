import React from 'react'
import { BtnPriceContainer, BtnSM, PriceCard, ProdCardS } from './ProductoCardsStyles';
import { useDispatch } from 'react-redux';
import { addToCart } from "../../redux/cart_carrito/cartSlice";

import ButtonUI from "../UI/Button/Button";


const ProductoCard = ({img, title, price, id}) => {

    const dispatch = useDispatch();
  
    return (
    <ProdCardS>
        <h3>{title}</h3>

        <img 
            src={img}
            alt={title}
        />
        
        <BtnPriceContainer>
            <PriceCard>${price}</PriceCard>
                
            <ButtonUI 
                onClick={() => dispatch(addToCart({ img, title, price, id }))}
            > Add cart </ButtonUI>
        </BtnPriceContainer>
        
        <BtnSM>
            <button>See Product</button>
        </BtnSM>
    </ProdCardS>
  );
};

export default ProductoCard;