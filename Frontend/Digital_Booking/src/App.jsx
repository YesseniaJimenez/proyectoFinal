import React from 'react'
import Layout from './Routes/Layout'
import Login from './Routes/Login'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import './App.css'
import { routes } from './Navigation/Routes'

function App() {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route element={<Layout />}>
                    {
                        routes.map(({ id, path, Component}) => {
                            return (
                                <Route key={id} path={path} element={<Component />} />
                            )   
                        })
                    }
                </Route>
                <Route path='/' element={<Navigate to="/login" />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
