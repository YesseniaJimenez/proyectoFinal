import React from 'react'
import { useState, useContext } from 'react'
import { ContextLogin } from '../Context/LoginContext'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const { handleLogin } = useContext(ContextLogin)
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    handleLogin()
    navigate("/home")
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Email</label>
        <input type="email" name="email" id="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />

        <label htmlFor="">Contraseña</label>
        <input type="password" name="password" id="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  )
}

export default Login