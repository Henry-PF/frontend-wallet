import React, { useEffect } from 'react';
import { reloadByMp } from '../../../../redux/actions';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';


const Recarga = () => {
    const dispatch = useDispatch();
    const params = useParams();
    console.log(params);

    const [userData, setUserData] = React.useState({
        id: "1",
        stock: "1",
        price: 0
    })

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
    }

    const toMercadoPago = (event) => {
        try {
            //aca se haria el post a la ruta donde se declaren los pagos para mercado pago
            const data = dispatch(reloadByMp(userData));
            console.log(data);
        } catch (error) {
            console.log(error.message);
        }
    }
    const toTransfer = () => {//aca se haria la adaptacion para poder recargar por transferencia
    }
    const toCreditDebit = () => {//aca se haria la adaptacion para poder por tarjeta de credito/debito
    }


    return (
        <div className="d-grid gap-2 col-6 mx-auto">
            <h5>Monto a ingresar</h5>
            <hr />
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text rounded-0">$</span>
                </div>
                <input type="number" value={userData.price} name="price" className="form-control rounded-0" aria-label="Amount (to the nearest dollar)" onChange={handleChange} />
                <div className="input-group-append">
                    <span className="input-group-text rounded-0">ARS</span>
                </div>
            </div>
            <hr />
            <button className="btn btn-success" type="button" disabled>Credito/Debito</button>
            <button className="btn btn-success" type="button" disabled>Transferencia</button>
            <button className="btn btn-success" type="button" onClick={() => toMercadoPago()}>Mercado Pago</button>
        </div>
    )
}

export default Recarga;