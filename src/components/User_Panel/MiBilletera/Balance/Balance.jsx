import React from 'react'
import { connect } from "react-redux";

const Balance = (prop) => {
    const saldo = prop.saldo
    return (
        <>
            <div className=''>
                <h2>{`balance: ${saldo}`}</h2>
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return { saldo: state.user.saldo
    };
  }

export default connect(mapStateToProps, null)(Balance);
