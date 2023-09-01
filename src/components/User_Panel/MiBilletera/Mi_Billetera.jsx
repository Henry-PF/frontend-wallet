import React from 'react'
import Navbar from '../Navbar/Navbar'
import Contacts from './Contacts/Contacts'
import ButtonPanel from './Button_Panel/Button_Panel'
import Balance from './Balance/Balance'
import TransactionHistory from './Transaction_History/Transaction_History'

const MiBilletera = () => {
    return (
        <>
            <section>
                <div className="container-fluid" >
                    <div className="row" >
                        <div className="col-auto col-md-2 col-xl-2 d-flex align-items-center justify-content-center px-sm-2 px-0 min-vh-100 bg-dark" >
                            <Navbar />
                        </div>
                        <div className="col bg-light">
                            <div className="row h-100">
                                <div className="col-8 h-25 w-100 p-4">
                                    <div className="d-flex justify-content-center w-100 h-100 bg-secondary text-white rounded-5 ">
                                        <Balance />
                                    </div>
                                </div>
                                <div className="col-8 h-75 w-100 p-4">
                                    <div className="w-100 h-100 d-flex justify-content-center bg-secondary text-white rounded-5">
                                        <TransactionHistory />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-2 bg-light d-flex flex-column w-25 p-4 ">
                            <div className="row">
                                <ButtonPanel />
                            </div>
                            <div className="row">
                                <Contacts />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MiBilletera