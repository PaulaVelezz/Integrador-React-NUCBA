import React from 'react'
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { MdLocalPhone, MdEmail, MdLocationPin } from "react-icons/md";

import { FooterContainer, footerLogo, footerBoxOne,
    firstBoxInfo, footerBoxTwo, secondBoxInfo, 
    footerBoxthree, thirdBoxInfo } from "./FooterStyles";

const Footer = () => {
  return (
    <FooterContainer>
        <footerLogo>
            {/* <img src="images/Logo (3).png" alt="logo" /> */}
        </footerLogo>

        <footerBoxOne>
            <h2>Contáctanos</h2>
            <firstBoxInfo>
                <p> <MdLocalPhone/> 000-000</p>
                <p> <MdEmail/> Correo@gmail</p>
                <p> <MdLocationPin/> Avenida 1234</p>
            </firstBoxInfo>
        </footerBoxOne>

        <footerBoxTwo>
            <h2>Preguntas frecuentes</h2>
            <secondBoxInfo>
                <p> texto uno</p>
                <p> texto dos</p>
                <p> texto tres</p>
            </secondBoxInfo>
        </footerBoxTwo>

        <footerBoxthree>
            <h2>Nuestras redes</h2>
            <thirdBoxInfo>
                <BsInstagram/>
                <FaFacebookF/>
                <SiTiktok/>
            </thirdBoxInfo>
        </footerBoxthree>
    </FooterContainer>
  )
}

export default Footer;