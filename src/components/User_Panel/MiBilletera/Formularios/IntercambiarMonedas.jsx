import React, { useEffect } from 'react';
import { UpdateReloadByMp, reloadByMp } from '../../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';


const IntercambiarMonedas = () => {
    const balanceUser = useSelector((state) => state.user.saldo)

    const [saldoActual, setSaldoActual] = React.useState({saldoDisponible: 0});
    const [ButtonActive, setButtonActive] = React.useState(false);
    const [dataMonedas, setDataMonedas] = React.useState({
        moneda_1:"",
        moneda_2:""
    });

    const handlerChangeOptions = (event) => {
        setDataMonedas({ ...dataMonedas, [event.target.name]: event.target.value });
        console.log(dataMonedas);
    };

    const ButtonPrevisualizar = () => {
        setButtonActive(!ButtonActive)
    };

    useEffect(() => {
        console.log(balanceUser);
        
    },[dataMonedas.moneda_1]);

    return (
        <div class="d-grid gap-2 col-6 mx-auto">
            <h5 className='d-flex justify-content-center'>De:</h5>
            <select class="form-select" aria-label="Default select example" onChange={handlerChangeOptions} value={dataMonedas.moneda_1} name='moneda_1'>
                <option selected >Moneda</option>
                <option  value="ARS" >ARS</option>
                <option  value="USD" >USD</option>
                <option  value="VES" >VES</option>
            </select>
            <input type="number" name="price" class="form-control rounded-0" aria-label="Amount (to the nearest dollar)" />
            <h6>Saldo Disponible: {saldoActual.saldoDisponible}</h6>
            <h5 className='d-flex justify-content-center'>A</h5>
            <select class="form-select" aria-label="Default select example" onChange={handlerChangeOptions} value={dataMonedas.moneda_2} name='moneda_2'>
                <option selected >Moneda</option>
                <option value="ARS" name="moneda_2">ARS</option>
                <option value="USD" name="moneda_2">USD</option>
                <option value="VES" name="moneda_2">VES</option>
            </select>
            <input type="number" name="price" class="form-control rounded-0" aria-label="Amount (to the nearest dollar)" />
            <br/>
            <button class="btn btn-danger" type="button" onClick={() => ButtonPrevisualizar()} >Previsualizar conversion</button>
            { ButtonActive === true ? <button class="btn btn-danger" type="button" >Realizar conversion</button> : null}
        </div>
    )
}

export default IntercambiarMonedas;