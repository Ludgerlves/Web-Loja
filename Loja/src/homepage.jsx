import React,{useState} from "react";
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Banner from './components/Banner';
import Arrival from './components/Arrival';
import Vendas from './components/Vendas';
import Favoritos from './components/Favoritos';
import Download from './components/Download';
import Promo from './components/Promo';
import Footer from './components/Footer';
import './styles.css';

const HomePage=()=> {
  useEffect(() => {
    // Configuração do ScrollReveal
    const scrollRevealOption = {
      origin: "bottom",
      distance: "50px",
      duration: 1000,
    };

    ScrollReveal().reveal(".header__image img", {
      ...scrollRevealOption,
      origin: "right",
    });
    ScrollReveal().reveal(".header__content h1", {
      ...scrollRevealOption,
      delay: 500,
    });
    ScrollReveal().reveal(".header__content p", {
      ...scrollRevealOption,
      delay: 1000,
    });
    ScrollReveal().reveal(".header__btns", {
      ...scrollRevealOption,
      delay: 1500,
    });

    ScrollReveal().reveal(".arrival__card", {
      ...scrollRevealOption,
      interval: 500,
    });

    ScrollReveal().reveal(".sale__image img", {
      ...scrollRevealOption,
      origin: "left",
    });
    ScrollReveal().reveal(".sale__content h2", {
      ...scrollRevealOption,
      delay: 500,
    });
    ScrollReveal().reveal(".sale__content p", {
      ...scrollRevealOption,
      delay: 1000,
    });
    ScrollReveal().reveal(".sale__content h4", {
      ...scrollRevealOption,
      delay: 1000,
    });
    ScrollReveal().reveal(".sale__btn", {
      ...scrollRevealOption,
      delay: 1500,
    });

    ScrollReveal().reveal(".favourite__card", {
      ...scrollRevealOption,
      interval: 500,
    });

    // Banner animation
    const bannerContent = document.querySelectorAll(".banner__container img");
    bannerContent.forEach((item) => {
      const duplicateNode = item.cloneNode(true);
      duplicateNode.setAttribute("aria-hidden", true);
      document.querySelector(".banner__container").appendChild(duplicateNode);
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Banner />
      <Arrival />
      <Vendas />
      <Favoritos />
      <Download />
      <Promo />
      <Footer />
    </div>
  );
}

export default HomePage;