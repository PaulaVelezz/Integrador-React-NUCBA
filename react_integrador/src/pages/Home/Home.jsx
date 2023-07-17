import React from 'react';
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Categorias from '../../components/Categoria/Categorias';
import ProductosCards from '../../components/Productos/ProductoCards';


const Home = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Categorias />
    <ProductosCards />
    </>
  )
}

export default Home;