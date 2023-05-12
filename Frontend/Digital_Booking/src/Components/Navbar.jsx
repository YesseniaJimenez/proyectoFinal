import React, { useState } from 'react'
import MenuMobile from '../Routes/MenuMobile'
import logo from "../assets/logo1.png"
import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {

    const navigate = useNavigate()

    const displayMenu = () => {
        navigate("/menumobile")
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