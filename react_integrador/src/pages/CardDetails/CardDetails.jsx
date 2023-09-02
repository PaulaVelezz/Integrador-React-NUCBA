import React from "react";
import {
  DetailsContainer,
  DetailsImg,
  DetailsText,
  DetailsBtns,
  Divider,
  DetailsIcons,
  DetailsBtn,
  BtnGoBack,
} from "./CardDetailsStyles";

import { FaArrowLeftLong } from "react-icons/fa6";

const CardDetails = () => {
  return (
    <DetailsContainer>
      <BtnGoBack>
        <FaArrowLeftLong />
        Volver atrás
      </BtnGoBack>

      <DetailsImg>
        <img src="images/producto_15.png" alt="imagen_producto" />
      </DetailsImg>

      <DetailsText>
        <h2>Titulo producto</h2>
        <p>Descripcion producto tuki tuki tuki tuki tuki tuki</p>

        <Divider />
        <DetailsIcons>
          <img src="images/granos_cafe.png" alt="" />
          <p>500 GR.</p>
        </DetailsIcons>
        <Divider />
        <DetailsIcons>
          <img src="images/scoter.png" alt="" />
          <p>FREE SHIPPING</p>
        </DetailsIcons>

        <DetailsBtns>
          <button>cantidad</button>
          <DetailsBtn>Agregar al carrito</DetailsBtn>
        </DetailsBtns>
      </DetailsText>
    </DetailsContainer>
  );
};

export default CardDetails;
