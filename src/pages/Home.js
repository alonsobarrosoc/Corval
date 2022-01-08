import React from "react";
import Navigation from "../components/Navigation";

import logo from '../imgs/53139474_101025971061399_6126230540858163200_n.jpg'
import atencion from '../imgs/images.jpeg'




function Home() {

    return (
        <>
            <Navigation />
            <div className="grid place-items-center flex">
                <h1 className='text-4xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-cyan-600 text-center'>Profesionales en Seguros y Finanzas</h1>
                <img
                    src={logo}
                    // width='300'
                    // height='300'
                    className="mt-6"
                    alt="" />
            </div>
            <div className="h-12"></div>

            <div className="sm:flex">

                <img src={atencion} alt="" className="w-screen" />
                <ul className="space-y-8">
                    <li className="text-2xl flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path className='text-cyan-600' fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>Garantía y seguridad</li>
                    <li className="text-2xl flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path className='text-cyan-600' fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>Atención al cliente excelente</li>
                    <li className="text-2xl flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path className='text-cyan-600' fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Protección y privacidad</li>



                    <li className="text-2xl flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path className='text-cyan-600' fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Los mejores precios</li>
                    <li className="text-2xl flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path className='text-cyan-600' fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Confidencialidad absoluta</li>



                </ul>
            </div>





        </>

    )
}
export default Home;