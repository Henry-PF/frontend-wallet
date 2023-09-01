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
                        <div className="col-auto d-flex align-items-center justify-content-center px-0 min-vh-100 bg-dark" >
                            <Navbar />
                        </div>
                        <div className="col bg-light">
                            <h1 className='m-2'>Mi Billetera</h1>
                            <div className="row">
                                <div className="row w-100 p-4">
                                    <div className="d-flex justify-content-center w-100 h-100 text-black rounded-5 ">
                                        <Balance />
                                    </div>
                                </div>
                                <div className="row w-100 p-4">
                                    <div className="w-100 h-100 d-flex flex-column justify-content-center text-black rounded-5">
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