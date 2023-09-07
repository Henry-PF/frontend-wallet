import React from 'react'
import './card.css'
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import IntercambiarMonedas from '../../MiBilletera/Formularios/IntercambiarMonedas';
const Card = () => {
    const { saldo } = useSelector(state => state.user);

    return (
        <div className='wallet-cards-container'>
            <h1>Mi Balance</h1>
            <div className='d-flex'>

                {/* <button
                    class="btn wallet-button"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#IntercambioModel"
                >
                    Intercambiar
                </button> */}
                <div className='wallet-cards'>
                    <div className='wallet-money'>
                        <p>Dollar</p>
                    </div>
                    <div className='wallet-balance'>
                        <p>$ {0} USD</p>
                    </div>
                </div>
                <div className='wallet-cards'>
                    <div className='wallet-money'>
                        <p>Bolivar Ven</p>
                    </div>
                    <div className='wallet-balance'>
                        <p>$ {0} VES</p>
                    </div>
                </div>
                <div className='wallet-cards'>
                    <div className='wallet-money'>
                        <p>Pesos Arg</p>
                    </div>
                    <div className='wallet-balance'>
                        <p>$ {saldo} ARG</p>
                    </div>
                </div>
            </div>
            {/* <!-- MODAL Intermcabiar--> */}
            <div class="modal fade" id="IntercambioModel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Selecciona 2 monedas para intercambiar</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <IntercambiarMonedas/>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card