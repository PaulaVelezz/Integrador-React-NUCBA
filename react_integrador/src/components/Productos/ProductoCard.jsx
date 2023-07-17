import React from 'react'
import { BtnPriceContainer, BtnSM, ProdCardS } from './ProductoCardsStyles';
// import { useDispatch } from 'react-redux';



const ProductoCard = ( {img, title, price}) => {

    // const dispatch = useDispatch()
  
    return (
    <ProdCardS>
        <h3>{title}</h3>

        <img 
            src={img}
            alt={title}
        />
        
        <BtnPriceContainer>
            <button> Add cart - {price} </button>
        </BtnPriceContainer>
        
        <BtnSM>
            <button>See Product</button>
        </BtnSM>
    </ProdCardS>
  )
}

export default ProductoCard;