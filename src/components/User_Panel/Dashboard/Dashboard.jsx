import React from 'react'
import Navbar from '../Navbar/Navbar'
import QuickTransaction from './QuickTransaction/QuickTransaction'
import Transactions from './Transactions/Transactions'
import Card from './Card/Card'

const Dashboard = () => {
    return (
        <>
            <section className=''>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-auto px-0 min-vh-100 bg-dark" >
                            <Navbar />
                        </div>
                        <div className="col bg-light">
                            <div className="row">
                                <div className="col">
                                    <div className="">
                                        <Card />
                                    </div>
                                </div>
                            </div>

                            <div className="row bg-light">
                                <div className="col h-50">
                                    <div className="h-100">
                                        <QuickTransaction />
                                    </div>
                                </div>
                                <div className="col h-50">
                                    <div className="h-100">
                                        <Transactions />
                                    </div>
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