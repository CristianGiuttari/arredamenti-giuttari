import React from 'react';
import HomeNavbar from '../components/Layouts/HomeNavbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Sito/Banner';
import Partner from '../components/Sito/Partner';
import About from '../components/Sito/About';
import Features from '../components/Sito/Features';
import Cta from '../components/Sito/Cta';

const Index = () => (
    <>
        <HomeNavbar/>
        <Banner/>
        <Partner/>
        <About/>
        <Cta/>
        <Features/>
        <Footer/>
    </>
);

export default Index;
