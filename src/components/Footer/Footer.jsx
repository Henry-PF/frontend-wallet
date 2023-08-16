import React from 'react'
import logo from '../../assets/logo_wallet.jpg'

const Footer = () => {
    return (
        <>
            <footer className='container d-flex align-items-center justify-content-center h-100 flex-column'>
                <img src={logo} className='w-25' alt="" />
                <p className='text-light'>© Todos los derechos reservados</p>
            </footer>
        </>

    )
}

export default Footer