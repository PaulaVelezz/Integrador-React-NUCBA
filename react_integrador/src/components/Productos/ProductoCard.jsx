import React from "react";
import { BtnPriceContainer, PriceCard, ProdCardS } from "./ProductoCardsStyles";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart_carrito/cartSlice";
import { useNavigate } from "react-router-dom";

import ButtonUI from "../UI/Button/Button";

const ProductoCard = ({ img, title, price, id }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const cardDetails = () => {
    navigate("/details");
  };

  return (
    <ProdCardS>
      <h3>{title}</h3>

      <img src={img} alt={title} />

      <BtnPriceContainer>
        <PriceCard>${price}</PriceCard>

        {/* <ButtonUI onClick={cardDetails}> Ver detalle </ButtonUI> */}

        <ButtonUI
          onClick={() => dispatch(addToCart({ img, title, price, id }))}
        >
          {" "}
          Add cart{" "}
        </ButtonUI>
      </BtnPriceContainer>
    </ProdCardS>
  );
};

export default ProductoCard;
