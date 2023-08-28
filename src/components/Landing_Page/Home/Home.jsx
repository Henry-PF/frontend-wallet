import React from 'react'
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import Mision from '../Mision/Mision'
import About from '../About/About'
import Testimonials from '../Testimonials/Testimonials'
import Footer from '../Footer/Footer'
import Services from '../Services/Services'

const Home = () => {
    return (   
        <>
            <Navbar/>
            <Header />
            <Mision />
            <About />
            <Services/>
            <Testimonials />
            <Footer />
        </>
    )
}

export default Home