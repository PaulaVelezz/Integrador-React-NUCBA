import React from 'react'
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { MdLocalPhone, MdEmail, MdLocationPin } from "react-icons/md";

import { FirstBoxInfo, FooterBoxOne, FooterBoxTwo, FooterBoxthree, 
    FooterContainer, FooterLogo, SecondBoxInfo, ThirdBoxInfo } from "./FooterStyles";

const Footer = () => {
  return (
    <FooterContainer>
        <FooterLogo>
            {/* <img src="images/Logo (3).png" alt="logo" /> */}
        </FooterLogo>

        <FooterBoxOne>
            <h2>Contáctanos</h2>
            <FirstBoxInfo>
                <p> <MdLocalPhone/> 000-000</p>
                <p> <MdEmail/> Correo@gmail</p>
                <p> <MdLocationPin/> Avenida 1234</p>
            </FirstBoxInfo>
        </FooterBoxOne>

        <FooterBoxTwo>
            <h2>Preguntas frecuentes</h2>
            <SecondBoxInfo>
                <p> texto uno</p>
                <p> texto dos</p>
                <p> texto tres</p>
            </SecondBoxInfo>
        </FooterBoxTwo>

        <FooterBoxthree>
            <h2>Nuestras redes</h2>
            <ThirdBoxInfo>
                <BsInstagram/>
                <FaFacebookF/>
                <SiTiktok/>
            </ThirdBoxInfo>
        </FooterBoxthree>
    </FooterContainer>
  )
}

export default Footer;