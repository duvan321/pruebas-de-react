/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "../style/Informacion.css";
import {Link} from "react-router-dom"
const Navbar = () =>{
    return(
  <>

<nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="https://github.com/duvan321/pruebas-de-react">Mi pruebas</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/" >Inicio</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/destacados" >Destacados</Link >
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            pruebas en:
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="dropdown-item" to="/contacto">h1, p</Link ></li>
            <li><Link className="dropdown-item" to="/informacion">Estilos</Link ></li>
            <li><Link className="dropdown-item" to="/input">input img</Link ></li>
            
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </>
    )
}

export default Navbar