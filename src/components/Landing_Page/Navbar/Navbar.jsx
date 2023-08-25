import React from 'react'
import logo from '../../../assets/logo_wallet.jpg'

const Navbar = () => {
    return (
        <nav className="container navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><img className='nav-logo' src={logo} alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end me-5" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item mx-2">
                            <a className="nav-link text-white" href="/">Inicio</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link text-white" href='/about_us'>Conocenos</a>
                        </li>
                        {/* <li className="nav-item mx-2">
                            <a className="nav-link" href="/login">Iniciar Sesion</a>
                        </li> */}
                        <li class="nav-item mx-2 dropdown">
                            <a class="nav-link text-white" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Acceder
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/login">Iniciar Sesion</a></li>
                                <li><a class="dropdown-item" href="/register">Crear Cuenta</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

            </div >
        </nav >
    )
}

export default Navbar;
