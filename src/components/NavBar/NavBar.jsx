import logo from "../../assets/logo.png"
import CartWidget from "./CartWidget"
import "./navbar.css"
import { Link } from "react-router-dom"


const NavBar = () => {
  return (
    <header className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-dark container-fluid barraNavegacion">

        <Link to={"/"} className="navbar-brand">
          <img className="logo" src={logo} alt="Logo de Huellitas" />
        </Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse menuNavegacion" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5 ms-auto p-2 text-center mx-auto">
            <li className="nav-item">
              <Link to={"/"} className="active" aria-current="page">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="dropdown-toggle" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Productos
              </Link>
              <ul className="dropdown-menu text-center">
                <li><Link to={"/productos/perros"} className="dropdown-item">Perros</Link></li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li><Link to={"/productos/gatos"} className="dropdown-item">Gatos</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to={"/servicios"} >Servicios</Link>
            </li>
            <li className="nav-item">
              <Link to={"/Contacto"}>Contacto</Link>
            </li>
          </ul>
        </div>
        
        <CartWidget /> 
      
      </nav>
    </header>

  )
}

export default NavBar