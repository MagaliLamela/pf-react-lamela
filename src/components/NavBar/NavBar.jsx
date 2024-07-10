import logo from "../../assets/logo.png"
import CartWidget from "./CartWidget"
import "./navbar.css"


const NavBar = () => {
  return (
    <header className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-dark container-fluid barraNavegacion">

        <a className="navbar-brand" href="#">
          <img className="logo" src={logo} alt="Logo de Huellitas" />
        </a>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse menuNavegacion" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5 ms-auto p-2 text-center mx-auto">
            <li className="nav-item">
              <a className="active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item dropdown">
              <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Productos
              </a>
              <ul className="dropdown-menu text-center">
                <li><a className="dropdown-item" href="#">Perros</a></li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li><a className="dropdown-item" href="#">Gatos</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#">Servicios</a>
            </li>
            <li className="nav-item">
              <a href="#">Contacto</a>
            </li>
          </ul>
        </div>
        
        <CartWidget /> 
      
      </nav>
    </header>

  )
}

export default NavBar