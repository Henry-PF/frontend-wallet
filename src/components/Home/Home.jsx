import React from 'react'
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import Mision from '../Mision/Mision'
import Testimonials from '../Testimonials/Testimonials'
import Footer from '../Footer/Footer'
import About from '../About/About'

const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Mision />
            <About />
            <Testimonials />
            <Footer />
        </>
    )
}

export default Home