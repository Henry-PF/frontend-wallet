import React from 'react'
import logo from '../../../assets/logo_wallet.jpg'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="container navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href=""><img className='nav-logo' src={logo} alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end me-5" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item mx-2">
                            <a className="nav-link" aria-current="page" href="">Home</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="">Abaut Us</a>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to='/dashboard'>Log in</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar