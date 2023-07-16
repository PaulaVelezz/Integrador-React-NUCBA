import React from 'react';
import Categoria from './Categoria';
import { CategFilTitle, CategoriasFilContainer } from './CategoriasStyles';
import { useSelector } from "react-redux";



const Categorias = () => {

  const categories = useSelector (state  => state.categories.categories);


  return (
    <>
      <CategFilTitle>
        <h2>Encontrá el café ideal para tu cafetera</h2>
      </CategFilTitle>
      <CategoriasFilContainer>
        {
          categories.map((category) =>{
            return <Categoria {...category}  key={category.id}/>
          })
        } 
      </CategoriasFilContainer>
    </>
  );
};

export default Categorias;