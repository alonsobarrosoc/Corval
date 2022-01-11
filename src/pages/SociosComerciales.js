import React from "react";
import Navigation from "../components/Navigation";
import aig from "../imgs/aig.png";
import zurich from "../imgs/zurich.png";
import qualitas from "../imgs/qualitas.png";
import insignia from "../imgs/insignia.png";
import hdi from "../imgs/hdi.png";
import mapfre from "../imgs/mapfre.png";
import cont from "../imgs/cont.png";
import hiscox from "../imgs/hiscox.png";
import plan from "../imgs/plan.png";

function SociosComerciales() {
    const im = "w-3/4"
  return (
    <div>
      <Navigation />
      <div className="m-6">
        <h1 className="text-red-600 text-4xl sm:text-4xl md:text-6xl lg:text-8xl font-bold">
          Socios Comerciales
        </h1>
        <h1 className="my-6">
          No te preocuopes,{" "}
          <b className="text-cyan-600 text-3xl">NOSOTROS SOMOS TU CONTACTO</b>
        </h1>
        <p className="bg-gray-200 rounded-lg p-2">
          Trabajamos con las <b>MEJORES Aseguradoras y Afianzadoras</b> para
          poder ofrecer las mejores alternativas y una amplia gama de productos
          a nuestros clientes, algunas de ellas:
        </p>
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 m-6 gap-4 content-end">
          <img src={aig} alt="" className={im} />
          <img src={zurich} alt="" className={im} />
          <img src={qualitas} alt="" className={im} />
          <img src={insignia} alt="" className={im} />
          <img src={hdi} alt="" className={im} />
          <img src={mapfre} alt="" className={im} />
          <img src={cont} alt="" className={im} />
          <img src={hiscox} alt="" className={im} />
          <img src={plan} alt="" className={im} />
        </div>
      </div>
    </div>
  );
}

export default SociosComerciales;
