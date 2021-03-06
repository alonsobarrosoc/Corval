import React from 'react'
import Navigation from '../components/Navigation'
import TarjContacto from '../components/TarjContacto'
import logo from '../imgs/53139474_101025971061399_6126230540858163200_n.jpg'

function ContactoDireccion() {
    const tit = "text-cyan-600"
    return (
        <>
            <Navigation />
            <div className="text-center">
                <h1 className="text-red-600 text-4xl sm:text-4xl md:text-6xl lg:text-8xl m-6 font-bold">Dirección</h1>
            </div>
            <div className="ml-6 grid grid-cols-2 place-items-center">
                <div className="">
                    <b className={tit}>
                        María Catalina Corral Valdez
                    </b>
                    <b className=''>
                        <br />
                        Broker de Seguros y Fianzas
                    </b>
                    <p>
                        <b className={tit}>
                            Ubicación:
                        </b>
                        <br />
                        Blvd. 18 Sur 4524. Villa Carmel. Puebla, Pue. CP 72567
                    </p>
                    
                    <p>
                        <b className={tit}>
                            Teléfono oficina
                        </b>
                        <br />
                        (222) 298-72-98
                    </p>

                    <p>
                        <b className={tit}>
                            Celular particular
                        </b>
                        <br />
                        (222) 217-12-50
                    </p>
                    <p>
                        <b className={tit}>
                            Celular oficina
                        </b>
                        <br />
                        (222) 323-32-62
                    </p>
                    <p>
                        <b className={tit}>Correo:</b>
                        <br />
                        direccion@seguroscorval.net
                    </p>
                </div>
                <div className="">

                    <img src={logo} alt='logo' height='100' width='200' />
                </div>
            </div>

            <TarjContacto wa = "2223233262" tel = "2222987298" correo="direccion@seguroscorval.net" />

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.050206647114!2d-98.20027098586274!3d19.017509187121483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc098221dde25%3A0x978b06c86e170620!2sC.%2018%20Sur%204524%2C%2022%20de%20Septiembre%2C%2072560%20Puebla%2C%20Pue.!5e0!3m2!1ses-419!2smx!4v1641617630758!5m2!1ses-419!2smx" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" className='mt-6 w-screen'></iframe>

        </>
    )
    
}

export default ContactoDireccion
