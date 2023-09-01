import React from 'react'
import { connect } from "react-redux";

const Balance = (prop) => {
    const saldo = prop.saldo
    return (
        <>
            <div>
                <h2>Saldo Actual </h2>
                <h2>{`$ ${saldo || 0}`}</h2>
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        saldo: state.user.saldo
    };
}

export default connect(mapStateToProps, null)(Balance);
