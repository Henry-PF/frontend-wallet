import './QrGenerator.css'; 
import { useState } from 'react';
import Qr from '../Qr/Qr';
import Form from '../Form/Form';

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
        <section className="global">
            <h1>Crea tu propio código QR</h1>
            <h5>Podrás generar un codigo para tu negocio, simplificando las transferencias entrantes!</h5>
            {showForm && <Form handleGenerate={handleGenerate}/>}
            {showQr && <Qr name={businessName} pic={businessPic} handleGoBack={handleGoBack}/>}
        </section>)
}

export default QrGenerator;