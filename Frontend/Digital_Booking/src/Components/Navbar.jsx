import React from 'react'
import logo from "../assets/logo1.png"
import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react'

const Navbar = () => {

    const navigate = useNavigate()

    const addProduct = () => {
        navigate("/add")
    }

    const [clickLogo, setClickLogo] = useState(false)

    const openMenu = () => { 
        setClickLogo(!clickLogo)
    }

    return (
        <header className='header'>
            <nav className='navBar'>
                <Link className='link-logo' to="/home"><img src={logo} alt="logo" className='logo' /></Link>
                <p className='parrafo-header'>Lleva la musica con vos</p>
                
                <span className="material-symbols-outlined" onClick={openMenu}>menu</span>
                <button className={clickLogo ? "button responsive" : "button"} onClick={addProduct}>Agregar producto</button>                
                <button className={clickLogo ? "button responsive" : "button"}>Crear cuenta</button>
                <button className={clickLogo ? "button responsive" : "button"}>Iniciar sesión</button>                
            </nav>
        </header>
    )
}

export default Navbar