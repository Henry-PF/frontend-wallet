import Destinatario from "../Destinario/Destinatario";
import TransferenciaForm from "../TransferenciaForm/TransferenciaForm";
import Confirm from "../Confirm/Confirm";
import "./NuevaTransferencia.css" 
import { useState } from "react";

const NuevaTransferencia = () =>{

    const [showDestiny, setShowDestiny] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    
    const [destiny, setDestiny] = useState("")
    const [amount, setAmount] = useState("");
    const [message, setMessage] = useState("");

    const handleDestiny= (destiny) => {
        setDestiny(destiny);
        setShowForm(true);
        setShowDestiny(false);}

    const handleConfirm = (amount, message) => {
        setAmount(amount);
        setMessage(message);
        setShowForm(false);
        setShowConfirm(true);}

    const handleAccept = () => {
        setShowDestiny(true);
        setShowConfirm(false);
        alert("Transferencia Completada")}

    const handleGoAmount = () => {
        setShowForm(true);
        setShowConfirm(false);}
     
    
    const handleGoDestiny = () => {
        setShowDestiny(true);
        setShowForm(false);}


// Renderizado
    return(
        <div className="globalTransfer">
            <h2 id="title">Transferir Dinero:</h2>
            {showDestiny && <Destinatario handleDestiny={handleDestiny}/>}
            {showForm && <TransferenciaForm handleConfirm={handleConfirm} handleGoDestiny={handleGoDestiny} destiny={destiny}/>}
            {showConfirm && <Confirm handleAccept={handleAccept} handleGoAmount={handleGoAmount}
            amount={amount} message={message} destiny={destiny}/>}
        </div>
    )
}

export default NuevaTransferencia;