import React from 'react'
import './card.css'

const Card = () => {
    return (
        <div className='wallet-cards-container'>
            <h1>Mi Balance</h1>
            <div className='d-flex'>
                <div className='wallet-cards'>
                    <div className='wallet-money'>
                        <p>Dollar</p>
                    </div>
                    <div className='wallet-balance'>
                        <p>$ {'10.000'} USD</p>
                    </div>
                </div>
                <div className='wallet-cards'>
                    <div className='wallet-money'>
                        <p>Bolivar Ven</p>
                    </div>
                    <div className='wallet-balance'>
                        <p>$ {'10.000'} VES</p>
                    </div>
                </div>
                <div className='wallet-cards'>
                    <div className='wallet-money'>
                        <p>Pesos Arg</p>
                    </div>
                    <div className='wallet-balance'>
                        <p>$ {'10.000'} ARG</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card