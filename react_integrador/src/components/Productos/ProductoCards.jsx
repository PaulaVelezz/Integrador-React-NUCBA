import React from 'react';
import { ProdCardContainer } from './ProductoCardsStyles';
import ProductoCard from './ProductoCard';
import { useSelector } from "react-redux";



const ProductosCards = () => {

    let products = useSelector(state => state.products.products);

  return (
    <>
        <ProdCardContainer>
            {
                Object.entries(products).map(([,cafes]) => {
                    return cafes.map((cafe) => {
                        return <ProductoCard {...cafe} key={cafe.id}/>
                    })
                })
            }
        </ProdCardContainer>
    </>
  );
};

export default ProductosCards;