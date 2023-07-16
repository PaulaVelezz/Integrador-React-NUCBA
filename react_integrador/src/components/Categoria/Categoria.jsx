import React from 'react'
import { CategFilCard } from './CategoriasStyles';

const Categoria = ( {img, title, category}) => {
  return (
    <CategFilCard>
        <img 
            src={img} 
            alt={category} 
        />
        
        <h3>{title}</h3>
    </CategFilCard>
  )
}

export default Categoria;