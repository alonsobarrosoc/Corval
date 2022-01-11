import React from "react";
import Navigation from "../components/Navigation";
import mdrt from "../imgs/mdrt.jpeg";
import amasfac from '../imgs/amasfac.png'

function Antecedentes() {
  const tit = "text-bold m-2 mt-6 font-bold text-cyan-600 text-3xl";
  return (
    <div>
      <Navigation />

      <div className="text-center">
        {/* <h1 className="text-red-600 text-4xl sm:text-4xl md:text-6xl lg:text-8xl font-bold my-6">
          Antecedentes
        </h1> */}
      </div>
      <h1 className={tit}>Historia</h1>
      <div className="md:flex m-2">
        <p className="md:w-2/3 text-justify">
          Nuestro despacho se encuentra laborando desde el año 1987, ofreciendo
          gran diversidad de productos en el ramo de los seguros; siendo su
          creadora la Lic. María Catalina Corral Valdez, quien es actualmente la
          directora del despacho, siempre se ha enfocado en dar un servicio de
          calidad, brindar tranquilidad así como de salvaguardar el patrimonio
          de todos nuestros clientes, contando con un equipo de colaboradores
          con ética, profesionalismo y conocimientos en el ramo. Asimismo es
          miembro de: Mesa del Millón de Dólares (Million Dolar Round Table) y
          Amasfac (Asociación Mexicana de Agentes de Seguros y Fianzas, A.C.)
        </p>
        <img src={mdrt} className="w-screen md:w-1/3" alt="mdrt" />
      </div>
      <h1 className={tit}>Diversidad</h1>
      <div className="md:flex m-2">
        <p className="md:w-2/3 text-justify">
          A lo largo de nuestra trayectoria hemos adquirido amplia experiencia
          en los diferentes ramos de seguros manejando desde pólizas
          individuales, hasta gobiernos estatales y municipales en diferentes
          partes de la República pasando también por diversas empresas privadas
          de múltiples giros.
        </p>
        <img src={amasfac} className='w-screen md:w-1/3' alt="" />
      </div>
    </div>
  );
}

export default Antecedentes;
