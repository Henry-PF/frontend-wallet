import React from 'react'
import imgHeader from '../../assets/mobile-wallet-banner-img.png'

const Header = () => {
    return (
        <header className='container d-flex align-items-center justify-content-center w-100 h-100 mt-5'>
            <div className='w-50 m-3'>
                <h1 className='w-100 display-1 text-secondary text-center my-3 '>SmartPay</h1>
                <h2 className='w-100 text-secondary text-center my-3'>Una sola billetera para todo tu dinero</h2>
            </div>
            <img className='w-50 my-3' src={imgHeader} alt="" />
        </header>
    )
}

export default Header