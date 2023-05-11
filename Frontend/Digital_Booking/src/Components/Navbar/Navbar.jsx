import React from 'react'
import { useState } from 'react';
import "./navbar.css"

const Navbar = () => {

    return (
        <header className='header'>
            <nav className='navBar'>
                <span>DB🎷</span>
                <div className="buttons" >
                    <button className='button'>Crear cuenta</button>
                    <button className='button'>Iniciar sesión</button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar