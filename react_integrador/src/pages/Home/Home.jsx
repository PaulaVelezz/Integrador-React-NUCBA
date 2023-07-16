import React from 'react';
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Categorias from '../../components/Categoria/Categorias';


const Home = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Categorias />
    </>
  )
}

export default Home;