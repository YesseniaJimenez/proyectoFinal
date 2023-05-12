import React from 'react'
import { useNavigate } from "react-router-dom"

const MenuMobile = () => {
    
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }

    return (
        <>
            <div className='menu-top'>
                <span className="material-symbols-outlined" onClick={goBack}>close</span>
                <p>Menu</p>
            </div>
            <div className='div-menu-buttons'>
                <button className='menu-button'>Crear cuenta</button>
                <button className='menu-button'>Iniciar sesion</button>
            </div>
        </>
    )
}

export default MenuMobile