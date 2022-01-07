import React from 'react'
import { Link } from 'react-router-dom';

function Dropdown({ isOpen, toggle }) {



    return (
        <div className={isOpen ? "grid grid-rows-4 text-center items-center bg-cyan-600" : 'hidden'}>
            <Link className="p-4 text-white" to='/'>Inicio</Link>
            <Link className="p-4 text-white" to='/nosotros'>Nosotros</Link>
            <Link className="p-4 text-white" to='/servicios'>Servicios</Link>
            <Link className="p-4 text-white" to='/contacto'>Contacto</Link>
            <Link className="p-4 text-white" to='/avisoprivasidad'>Aviso de Privacidad</Link>

        </div>
    )
}


export default Dropdown