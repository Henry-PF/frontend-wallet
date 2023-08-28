import React from 'react'
import './transactions.css'

const Transactions = () => {
    return (
        <div>
            <div className='row'>
                <div className='col py-1'>
                    <h3>Transacciones</h3>
                </div>
                <div className="col">
                    <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" />
                        <label className="btn btn-outline-dark px-4" for="btnradio1">Hoy</label>

                        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                        <label className="btn btn-outline-dark" for="btnradio2">Semana</label>

                        <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
                        <label className="btn btn-outline-dark  px-4" for="btnradio3">Mes</label>
                    </div>
                </div>
            </div>
            <div className='table-wrapper-scroll-y my-custom-scrollbar'>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Monto</th>
                            <th scope="col">Estado</th>
                        </tr>
                    </thead>
                    <tbody className='overflow-scroll'>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark Otto</td>
                            <td>01/02/2023</td>
                            <td>$ 1,000</td>
                            <td className='text-success'>Completo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob Thornton</td>
                            <td>01/02/2023</td>
                            <td>$ 5,000</td>
                            <td className='text-danger'>Cancelado</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>02/02/2023</td>
                            <td>$ 3,000</td>
                            <td className='text-warning'>Pendiente</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>02/02/2023</td>
                            <td>$ 3,000</td>
                            <td>Pendiente</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>02/02/2023</td>
                            <td>$ 3,000</td>
                            <td>Pendiente</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>02/02/2023</td>
                            <td>$ 3,000</td>
                            <td>Pendiente</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>02/02/2023</td>
                            <td>$ 3,000</td>
                            <td>Pendiente</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Transactions