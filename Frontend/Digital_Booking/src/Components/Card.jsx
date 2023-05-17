import React from 'react'
import { Link } from 'react-router-dom'
import percusion from "../assets/images/percusion.png"


const Card = () => {
    return (
        <div className='card'>
            <Link to="/detail" className='link-cards'>
                <img src={percusion} alt="Card" />
                <p>{"Instrumentos de viento"}</p>
                <p>{"807 Instrumentos"}</p>
            </Link>
        </div>
    )
}

export default Card