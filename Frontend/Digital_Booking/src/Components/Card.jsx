import React from 'react'
import { Link } from 'react-router-dom'
import percusion from "../assets/images/percusion.png"


const Card = () => {
    return (
        <div className='card'>
            <Link><img src={percusion} alt="Card" /></Link>
            <p>{"Instrumentos de viento"}</p>
            <p>{"807 Instrumentos"}</p>
        </div>
    )
}

export default Card