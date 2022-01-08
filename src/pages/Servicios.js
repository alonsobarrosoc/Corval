import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'

function servicios() {
    return (
        <>
            <Navigation />
            <div className="m-6">
                <h1 className="text-6xl font-bold text-red-600">Servicios</h1>
                <div className="">
                    <ul className='text-justify text-cyan-600'>
                        <li>
                            ➤ Vida
                        </li>
                        <li>
                            ➤ Gastos Medicos
                        </li>
                        <li>
                            ➤ Autos
                        </li>
                        <li>
                            ➤ Hogar
                        </li>
                        <li>
                            ➤ Accidentes personales
                        </li>
                        <li>
                            ➤ Seguro de viaje
                        </li>
                        <li>
                            ➤ Transporte
                        </li>
                        <li>
                            ➤ Lineas financieras
                        </li>
                        <li>
                            ➤ Aviación
                        </li>
                        <li>
                            ➤ Garantía extendida
                        </li>
                        <li>
                            ➤ Responsabilidad civil
                        </li>
                        <li>
                            ➤ Energía / Obra civil / Montaje / Pólizas de operación
                        </li>
                        <li>
                            ➤ Finanzas
                        </li>
                    </ul>
                </div>
                {/* <Link>
                    click
                </Link> */}

                <Link to='/contacto'>
                    <button className='bg-cyan-600 rounded-xl p-2 text-white animate-bounce m-6 md:absolute right-40 top-40'>
                        Para más información da click aquí
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
                        </svg>
                    </button>


                </Link>


            </div>
        </>
    )
}

export default servicios
