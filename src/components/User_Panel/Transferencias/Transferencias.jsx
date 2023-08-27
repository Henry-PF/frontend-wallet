import './TransferenciasStyles.css';
import Navbar from '../Navbar/Navbar';
import { Form } from 'react-bootstrap';


const Transferencias = () => {
    return (
        <>
            <section className=''>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-auto col-md-2 col-xl-2 d-flex align-items-center justify-content-center px-sm-2 px-0 min-vh-100 bg-dark" >
                            <Navbar />
                        </div>
                        <div className="col bg-light">
                            <h2>Historial de Transacciones</h2>
                            <div className='row d-flex align-items-center justify-content-center w-100 my-5'>
                                <div class="input-group rounded w-25">
                                    <input type="search" class="form-control rounded" placeholder="Buscar..." aria-label="Search" aria-describedby="search-addon" />
                                </div>
                                <div class="dropdown-center w-auto">
                                    <button class="btn border dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Cards
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Action two</a></li>
                                        <li><a class="dropdown-item" href="#">Action three</a></li>
                                    </ul>
                                </div>
                                <div className='col-2'>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <Form.Group controlId="date">
                                                <Form.Control type="date" name="date" placeholder="Fecha" />
                                            </Form.Group>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                </div>
            </section >
        </>
    )
}

export default Transferencias;