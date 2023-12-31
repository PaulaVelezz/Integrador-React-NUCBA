import React from "react";
import {
  HeroBtnOne,
  HeroBtnTwo,
  HeroButtonsContainer,
  HeroContainerS,
  HeroMainContainer,
  HeroOne,
  HeroOneImg,
  HeroTwo,
  HeroTwoImg,
} from "./HeroStyles";

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <HeroContainerS>
      <HeroMainContainer>
        <HeroOne>
          <HeroOneImg></HeroOneImg>
          <h1>THE BLESSED</h1>
        </HeroOne>

        <HeroTwo>
          <h1>BEAN</h1>
          <HeroTwoImg></HeroTwoImg>
        </HeroTwo>
      </HeroMainContainer>

      <HeroButtonsContainer>
        <HeroBtnOne>Ir a comprar</HeroBtnOne>

        <HeroBtnTwo>
          <Link style={{ color: "whitesmoke" }} to="/about">
            Sobre Nosotros
          </Link>
        </HeroBtnTwo>
      </HeroButtonsContainer>
    </HeroContainerS>
  );
};

export default Hero;
