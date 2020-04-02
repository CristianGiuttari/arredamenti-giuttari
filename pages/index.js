import React from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Agency/Banner';
import Partner from '../components/Agency/Partner';
import About from '../components/Agency/About';
import Features from '../components/Agency/Features';
import Cta from '../components/Agency/Cta';
import Contact from '../components/Agency/Contact';

const Index = () => (
    <>
        <Navbar/>
        <Banner/>
        <Partner/>
        <About/>
        <Cta/>
        <Features/>
        <Contact/>
        <Footer/>
    </>
);

export default Index;
