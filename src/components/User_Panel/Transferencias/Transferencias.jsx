import './TransferenciasStyles.css';
import Navbar from '../Navbar/Navbar';
import { useState } from 'react';

const Transferencias = () =>{
    const [selectedCard, setSelectedCard] = useState(''); 


 const transferencias = [{foto:"/user.png",id:1,nombre:"User 1",monto:"100",fecha:"",tarjeta:"Mastercard", estado:"Completada"},
                         {foto:"/user.png",id:2,nombre:"User 2",monto:"200",fecha:"",tarjeta:"Banelco", estado:"Completada"},
                         {foto:"/user.png",id:3,nombre:"User 3",monto:"300",fecha:"",tarjeta:"Visa", estado:"Rechazada"}]


return(
    <>
            <section className=''>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-auto col-md-2 col-xl-2 d-flex align-items-center justify-content-center px-sm-2 px-0 min-vh-100 bg-dark" >
                            <Navbar/>
                        </div>

            <div class="col bg-light">
                <div class="row h-40">
                    <h2 className='title'> Historial de transacciones</h2>
                    
                            <div className='filters'>
                                <select className="form-select mb-3 selectStyles" 
                                onChange={(e) => setSelectedCard(e.target.value)} value={selectedCard}>
                                    <option> &#128179; Card </option>
                                    <option value="1">Mastercard</option>
                                    <option value="2">Visa</option>
                                    <option value="3">Banelco</option>
                                </select>

                                <select className="form-select mb-3 selectStyles">
                                    <option> &#128198; Fecha </option>
                                    <option value="1">1/01/2000</option>
                                    <option value="2">2/01/2000</option>
                                    <option value="3">3/01/2000</option>
                                </select>
                            </div>
                        </div>


                        <div className="section">
                                <div className="column" id='t'>
                                    <p>Foto</p>
                                    {transferencias.map((transaccion, index) => (
                                        <img className="imgStyles" src={transaccion.foto} key={index} />
                                    ))}
                                </div>
                                <div className="column">
                                    <p>ID</p>
                                    {transferencias.map((transaccion, index) => (
                                        <p key={index}>#{transaccion.id}</p>
                                    ))}
                                </div>
                                <div className="column">
                                    <p>Nombre</p>
                                    {transferencias.map((transaccion, index) => (
                                        <p key={index}>{transaccion.nombre}</p>
                                    ))}
                                </div>
                                <div className="column">
                                    <p>Monto</p>
                                    {transferencias.map((transaccion, index) => (
                                        <p key={index}>{transaccion.monto}$</p>
                                    ))}
                                </div>
                                <div className="column">
                                    <p>Tarjeta</p>
                                    {transferencias.map((transaccion, index) => (
                                        <p key={index}>{transaccion.tarjeta}</p>
                                    ))}
                                </div>
                                <div className="column">
                                    <p>Estado</p>
                                    {transferencias.map((transaccion, index) => (
                                        <p
                                            className={transaccion.estado === "Completada" ? "statusOk" : "statusError"}
                                            key={index}
                                        >
                                            {transaccion.estado}
                                            <button className='buttonStyles'>&#x205E;</button>
                                        </p>
                                    ))}
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
    </section>
</>)
}

export default Transferencias;

