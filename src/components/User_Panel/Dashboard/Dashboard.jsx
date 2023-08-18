import React from 'react'
import Navbar from '../Navbar/Navbar'
import Card from './Card/Card'
import QuickTransaction from './QuickTransaction/QuickTransaction'
import Transactions from './Transactions/Transactions'

const Dashboard = () => {
    return (
        <>
            <section className=''>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-auto col-md-2 col-xl-2 d-flex align-items-center justify-content-center px-sm-2 px-0 min-vh-100 bg-dark" >
                            <Navbar />
                        </div>
                        <div class="col bg-light">
                            <div class="row h-100">
                                <div class="col-12 h-50 p-4">
                                    <div class="d-flex align-items-center justify-content-center  w-100 h-100">
                                        <Card />
                                    </div>
                                </div>
                                <div class="col-12 h-50">
                                    <div class="h-100">
                                        <QuickTransaction />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col bg-light">
                            <div class="col-12 h-50">
                                <div class="d-flex flex-column justify-content-center w-100 h-100">
                                    <p className='fs-4 m-0'>ARG $ 100,000</p>
                                    <p className='fs-4 m-0'>VES $ 100,000</p>
                                    <p className='fs-4 m-0'>USD $ 100,000</p>
                                </div>
                            </div>
                            <div class="col-12 h-50">
                                <div class="h-100">
                                    <Transactions />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>

    )
}

export default Dashboard