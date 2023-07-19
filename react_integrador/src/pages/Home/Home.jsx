import React from 'react';
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Categorias from '../../components/Categoria/Categorias';
import ProductosCards from '../../components/Productos/ProductoCards';
import Footer from '../../components/Footer/Footer';


const Home = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Categorias />
    <ProductosCards />
    <Footer />
    </>
  )
}

export default Home;