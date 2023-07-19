import React from 'react'
import { CategFilCard } from './CategoriasStyles';
import { useDispatch, useSelector } from 'react-redux';
import { categorySelect } from "../../redux/categories/categoriesSlice";

export const Categoria = ( {img, title, category}) => {

  const dispatch = useDispatch();

  const categorySelected = useSelector ((state) => state.categories.categorySelected)

  return (
    <CategFilCard
      selected={ category === categorySelected }
      onClick={ () => dispatch(categorySelect(category)) }
    >
        <img 
            src={img} 
            alt={category} 
        />
        
        <h3>{title}</h3>
    </CategFilCard>
  );
};

export default Categoria;