import React from "react";
import { AboutImg, AboutText, AboutUsContainerS } from "./AboutUsStyles";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const AboutUs = () => {
  return (
    <>
      <Navbar />

      <AboutUsContainerS>
        <AboutImg>
          <img src="images/cafe.webp" alt="cafe" />
        </AboutImg>
        <AboutText>
          <h2>About us.</h2>
          <p>
            Nos apasiona ofrecerle los mejores granos de café de todo el mundo,
            cuidadosamente seleccionados por su calidad excepcional y sabores
            únicos. Trabajamos directamente con productores y cooperativas de
            café, garantizando prácticas comerciales justas y abastecimiento
            sostenible. Estamos comprometidos a apoyar a las comunidades que
            cultivan estos extraordinarios granos de cafe.
          </p>
        </AboutText>
      </AboutUsContainerS>

      <Footer />
    </>
  );
};

export default AboutUs;
