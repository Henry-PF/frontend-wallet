import "./Confirm.css"

const Confirm = ({amount,message,handleAccept, handleGoAmount, destiny}) =>{
    return(
        <div className="confirmContainer">
            <h1>Confirmar transacción</h1>
            <h2>Estás transfiriendo {amount} $ a {destiny}</h2>
            <h3 style={{ fontStyle: "italic" }}>{message}</h3>
            <div className='buttonCont'>
            <button className="btn btn-secondary btn-lg buttons buttons" onClick={handleAccept}>Confirmar?</button>
            <button className="btn btn-secondary btn-lg buttons buttons" onClick={handleGoAmount}>Cancelar</button>
            </div>
        </div>
    )
}

export default Confirm;

