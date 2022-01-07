import React, { Fragment, useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import logo from '../imgs/53139474_101025971061399_6126230540858163200_n.jpg'
import Dropdown from './Dropdown';


const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: '#ff9900' }
    } else {
        return { color: '#ffffff' }
    }
}
const Navigation = ({ history }) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const hideMenu = () => {
            if (window.innerWidth > 768 && isOpen) {
                setIsOpen(false);
                console.log('resize');
            }
        }
        window.addEventListener('resize', hideMenu);
        return () => {
            window.removeEventListener('resize', hideMenu);
        };
    })



    return (
        <>
            <nav className='flex justify-between items-center h-16 bg-white text-cyan-600 relative shadow-sm font-sans'
                role='navigation'>
                <Link to='/' className='pl-8'>

                    <img
                        src={logo}
                        width="50"
                        height="50"
                        className="d-inline-block align-top ms-4"
                        alt="JuJu Coffee"
                    />
                </Link>
                <div className="px-4 cursor-pointer md:hidden"
                    onClick={toggle}
                >
                    
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path className='bg-cyan-600' fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                    
                </div>
                <div className="pr-8 md:block hidden">
                    <Link className="p-4" to='/'>Inicio</Link>
                    <Link className="p-4" to='/nosotros'>Nosotros</Link>
                    <Link className="p-4" to='/servicios'>Servicios</Link>
                    <Link className="p-4" to='/contacto'>Contacto</Link>
                    <Link className="p-4" to='/avisoprivacidad'>Aviso de privacidad</Link>
                   
                </div>
            </nav>
            <Dropdown isOpen={isOpen} toggle={toggle} />
        </>
    )
}

export default Navigation;