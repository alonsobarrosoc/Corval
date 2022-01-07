import React from "react";
import Navigation from "../components/Navigation";

import logo from '../imgs/53139474_101025971061399_6126230540858163200_n.jpg'
import atencion from '../imgs/images.jpeg'




function Home() {

    return (
        <>
            <Navigation />
            <div className="grid place-items-center m-16">
                <h1 className='text-8xl font-bold text-cyan-600 text-center'>Profesionales en Seguros y Finanzas</h1>
                <img
                    src={logo}
                    width='300'
                    height='300'
                    className="mt-6"
                    alt="" />
            </div>
            <div className="h-12"></div>
            <div className="m-16 grid grid-cols-2 grid-flow-col gap-4">

                <div className="">
                    <img src={atencion} alt="" width='600' height='600' />
                </div>
                <div className="">
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
                <div className="m-4 grid grid-cols-2 grid-flow-col gap-4">




                    {/* <div className="">
                        <h3>Misión</h3>
                        <ul>
                            <li className="text-justify">
                                Ser un despacho que brinde seguridad y confianza, conforme a las necesidades particulares de cada persona,
                                mediante servicios y soluciones de excelencia y calidad que permitan a todos nuestros clientes tener una
                                protección ya sea para su persona, familia o patrimonio garantizando bienestar y tranquilidad a nuestros
                                asegurados.
                            </li>
                        </ul>

                    </div>
                    <div className="">
                        <h3>Misión</h3>
                        <ul>
                            <li className="text-justify">
                                Ser un despacho que brinde seguridad y confianza, conforme a las necesidades particulares de cada persona,
                                mediante servicios y soluciones de excelencia y calidad que permitan a todos nuestros clientes tener una
                                protección ya sea para su persona, familia o patrimonio garantizando bienestar y tranquilidad a nuestros
                                asegurados.
                            </li>
                        </ul>

                    </div>
                    <div className="">
                        <h3>Visión</h3>
                        <ul>
                            <li className="text-justify">
                                Ser un despacho conformado por un grupo de profesionales con experiencia, ética y actitud de servicio para
cubrir las expectativas de nuestros clientes.
                            </li>
                            <li>
                                Convertirnos en el principal despacho de nuestros clientes.
                            </li>
                            <li>
                                Lograr una relación de confianza, sólida y duradera con nuestros asegurados.
                            </li>
                        </ul>

                    </div> */}
                </div>
            </div>
        </>

    )
}
export default Home;