import React from "react";
import { NavLink } from "react-router-dom";
import Logo from '../logo.svg';

function Navegacion() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark" >
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
                        My React App
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColapse" aria-controls="navbarColapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColapse">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item"><NavLink to={"/"} className={"nav-link"}>Inicio</NavLink></li>
                            <li className="nav-item"><NavLink to={"/list"} className={"nav-link"}>Listado</NavLink></li>
                            <li className="nav-item"><NavLink to={"/create"} className={"nav-link"}>Crear Usuario</NavLink></li>
                            <li className="nav-item"><NavLink to={"/list-digimon"} className={"nav-link"}>Lista de Digimon</NavLink></li>
                            <li className="nav-item"><NavLink to={"/list-marvel"} className={"nav-link"}>Lista de Marvel</NavLink></li>
                        </ul>
                    </div>
                </div>

            </nav>            
        </>
    );
}

export default Navegacion;