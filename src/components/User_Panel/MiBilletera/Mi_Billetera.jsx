import React from 'react'
import Navbar from '../Navbar/Navbar'
import Contacts from './Contacts/Contacts'
import ButtonPanel from './Button_Panel/Button_Panel'
import Balance from './Balance/Balance'
import TransactionHistory from './Transaction_History/Transaction_History'

const MiBilletera = () => {
    return (
        <>
            <section className=''>
                <div className="container-fluid" >
                    <div className="row" >
                        <div className="col-auto col-md-2 col-xl-2 d-flex align-items-center justify-content-center px-sm-2 px-0 min-vh-100 bg-dark" >
                            <Navbar />
                        </div>
                        <div class="col bg-light">
                            <div class="row h-100">
                                <div class="col-12 h-25 w-100 p-4">
                                    <div class="d-flex justify-content-center w-100 h-100 bg-secondary text-white rounded-5">
                                        <Balance />
                                    </div>
                                </div>
                                <div class="col-12 h-75 w-100 p-4">
                                    <div class="w-100 h-100 d-flex justify-content-center bg-secondary text-white rounded-5">
                                        <TransactionHistory />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-2 bg-light d-flex flex-xxl-column w-25 p-4 ">
                            <div class="col-12 h-25 w-100 ">
                                <div class="d-flex justify-content-center w-100 h-50">
                                    <ButtonPanel />
                                </div>
                            </div>
                            <div class="col-12 h-75 w-100">
                                <div class="h-100 w-100 d-flex justify-content-center bg-secondary text-white rounded-5">
                                    <Contacts />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MiBilletera