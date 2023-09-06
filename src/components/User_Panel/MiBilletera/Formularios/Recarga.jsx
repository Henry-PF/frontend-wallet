import React, { useEffect } from 'react';
import { UpdateReloadByMp, reloadByMp } from '../../../../redux/actions';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';


const Recarga = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const dataQuery = location.search;
    const searchParams =  new URLSearchParams(dataQuery);
    const payment_id = searchParams.get('payment_id');

    const [userData, setUserData] = React.useState({
        id: "1", //Aca se tiene que insertar el id relacionado con el back end
        title: "recarga",
        currency_id: "ARS", //esto tambien tendria que estar relacionado con la cuenta
        quantity: 1,
        price: 0,
        description: "Recarga para poder usar la pagina" // aca se pasa el id relacionado con la cuenta para que se vincule en el back
    });
    

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
    }

    const toMercadoPago = () => {
        try {
            dispatch(reloadByMp(userData));
        } catch (error) {
            console.log(error.message);
        }
    }

    const afterReload = () => {
        const dataQuery = location.search;
        const searchParams =  new URLSearchParams(dataQuery);
        const payment_id = searchParams.get('payment_id');
        const status = searchParams.get('collection_status');
        if(status === "approved"){
        const userId = localStorage.dni; // id del usuario
        const props = {
            userId: userId,
            payment_id: payment_id
        }
        dispatch(UpdateReloadByMp(props))
        return "actualizado";
        }
        return "no actualizado";
    }

    useEffect(() => {
        if(payment_id){
            afterReload();
        }
    },[]) 
    // const toTransfer = () => {//aca se haria la adaptacion para poder recargar por transferencia
    // }
    // const toCreditDebit = () => {//aca se haria la adaptacion para poder por tarjeta de credito/debito
    // }

    return (
        <div class="d-grid gap-2 col-6 mx-auto">
            <h5>Monto a ingresar</h5>
            <hr />
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text rounded-0">$</span>
                </div>
                <input type="number" value={userData.price} name="price" class="form-control rounded-0" aria-label="Amount (to the nearest dollar)" onChange={handleChange} />
                <div class="input-group-append">
                    <span class="input-group-text rounded-0">ARS</span>
                </div>
            </div>
            <hr />
            <button class="btn btn-success" type="button" onClick={() => toMercadoPago()}>Mercado Pago</button>
            <button class="btn btn-success" type="button" disabled>Credito/Debito</button>
            <button class="btn btn-success" type="button" disabled>Transferencia</button>
        </div>
    )
}

export default Recarga;