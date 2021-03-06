import React from 'react'
import Navigation from '../components/Navigation'
import TarjContacto from '../components/TarjContacto'
import logo from '../imgs/53139474_101025971061399_6126230540858163200_n.jpg'

function ContactoGerente() {
    const tit = "text-cyan-600"
    return (
        <>
            <Navigation />
            <div className="text-center">
                <h1 className="text-red-600 text-4xl sm:text-4xl md:text-6xl lg:text-8xl m-6 font-bold">Gerencia</h1>
            </div>
            <div className="ml-6 grid grid-cols-2 place-items-center">
                <div className="">
                    <b className = {tit}>
                        Cinthya González Corral
                    </b>
                    <br />
                    <b className=''>
                        Broker de Seguros
                    </b>
                    <p>
                        <b className = {tit}>
                            Ubicación:
                        </b>
                        <br />
                        <b className = {tit}> </b>
                        Blvd. 18 Sur 4524. Villa Carmel. Puebla, Pue. CP 72567
                    </p>
                    <p>
                        <b className = {tit}>Teléfono de oficina:</b> <br />
                        (222) 298-72-98
                    </p>
                    <p>
                        <b className = {tit}>Teléfono celular:</b><br />
                        (222) 217-00-88
                    </p>
                    <p>
                        <b className = {tit}>Correo:</b><br />
                        gerencia@seguroscorval.net
                    </p>
                </div>
                <div className="">

                    <img src={logo} alt='logo' height='100' width='200' />
                </div>
            </div>
            <TarjContacto tel = "2222987298" wa= "2222170088" correo = "gerencia@seguroscorval.net" />
            
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.050206647114!2d-98.20027098586274!3d19.017509187121483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc098221dde25%3A0x978b06c86e170620!2sC.%2018%20Sur%204524%2C%2022%20de%20Septiembre%2C%2072560%20Puebla%2C%20Pue.!5e0!3m2!1ses-419!2smx!4v1641617630758!5m2!1ses-419!2smx" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" className='mt-6 w-screen'></iframe>

        </>
    )
}

export default ContactoGerente
