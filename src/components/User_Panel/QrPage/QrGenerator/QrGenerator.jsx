import './QrGenerator.css'; 
import { useState } from 'react';
import Qr from '../Qr/Qr';
import Form from '../Form/Form';
import Navbar from '../../Navbar/Navbar';

const QrGenerator = () =>{

    const [showForm, setShowForm] = useState(true);
    const [showQr, setShowQr] = useState(false);
    const [businessName, setBusinessName] = useState('');
    const [businessPic, setBusinessPic] = useState(null);

    const handleGenerate = (name, pic) => {
        setBusinessName(name);
        setBusinessPic(pic);
        setShowForm(false);
        setShowQr(true);}

    const handleGoBack = () => {
        setShowForm(true);
        setShowQr(false);};

    return(
        <>
            <section className=''>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-auto col-md-2 col-xl-2 d-flex align-items-center justify-content-center px-sm-2 px-0 min-vh-100 bg-dark" >
                            <Navbar />
                        </div>
                        <div class="col bg-light">
                            <div class="row h-100">
                                <div class="col-12 p-4">
                                    <div class="w-100 h-100">
                                        <h1>Crea tu propio código QR</h1>
                                        <h5>Podrás generar un codigo para tu negocio, simplificando las transferencias entrantes!</h5>
                                        {showForm && <Form handleGenerate={handleGenerate}/>}
                                        {showQr && <Qr name={businessName} pic={businessPic} handleGoBack={handleGoBack}/>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>    
    )
}

export default QrGenerator;