import "./NavStyles.css";

const Nav = () =>{
    return(
        <div className="navContainer">
            <a className='linkTo' href="/rutaHome"><img src="logoSP.jpg" width="220" height="60" alt="logo"></img></a>
            <div className="nav-links">
                <a className='linksNav' href="/rutaHome"><h2 className="nav-link">Home</h2></a>
                <a className='linksNav' href="/rutaAbout"> <h2 className="nav-link">About Us</h2></a>
            </div>
        </div>
    )
}

export default Nav