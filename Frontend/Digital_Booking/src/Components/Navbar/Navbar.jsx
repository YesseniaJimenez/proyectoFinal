import React from 'react'
import logo from "../../assets/logo1.png"
import "./navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {

    const displayMenu = () => {

    }

    return (
        <header className='header'>
            <nav className='navBar'>
                <div>
                    <Link className='link-logo' to="/home"><img src={logo} alt="logo" /></Link>
                    <p className='parrafo-header'>Lleva la musica con vos</p>
                </div>
                <span className="material-symbols-outlined" onClick={displayMenu}>menu</span>
                <div className="buttons" >
                    <button className='button'>Crear cuenta</button>
                    <button className='button'>Iniciar sesión</button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar