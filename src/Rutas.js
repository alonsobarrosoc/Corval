import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Abouts from './pages/Abouts'
import Contacto from './pages/Contacto'
import Servicios from './pages/Servicios'
import AvisoPrivacidad from './pages/AvisoPrivacidad'
import ContactoGerente from './pages/ContactoGerente'
import ContactoDireccion from './pages/ContactoDireccion'



function Rutas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = '/' element = {<Home/>} />
                <Route path = '/nosotros' element = {<Abouts/>} />
                <Route path = '/contacto' element = {<Contacto/>} />
                <Route path = '/servicios' element = {<Servicios/>} />
                <Route path = '/avisoprivacidad' element = {<AvisoPrivacidad/>} />
                <Route path = 'contacto-gerencia' element = {<ContactoGerente />}/>
                <Route path = 'contacto-direccion' element = {<ContactoDireccion />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rutas
