import React from 'react'
import { connect, useDispatch } from "react-redux";
import { getBalanceUser } from '../../../../redux/actions';

const Balance = (state) => {
    const dispatch = useDispatch();
    const saldo = state.saldo;

    const handlerClick = () => {
        console.log(localStorage.dni);
        dispatch(getBalanceUser(localStorage.dni)); 
    }
    return (
        <>
            <div className=''>
                <br></br>
                <h2>{`balance: ${saldo}`} <button class="btn btn-success" type="button" onClick={() => handlerClick()}>🗘</button> </h2> 
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return { saldo: state.user.saldo
    };
  }

export default connect(mapStateToProps, null)(Balance);