import React from "react";
import Navigation from "../components/Navigation";
import gar from "../imgs/gar.png";
import mision from "../imgs/mision.png";
import vision from "../imgs/vision.png";
import valores from "../imgs/valores.png";
import objetivo from "../imgs/objetivo.png";
import { Link } from "react-router-dom";

function abouts() {
  const en_grid = "bg-gray-200 text-justify p-2 rounded";
  const tit_grid = "text-red-600 font-bold text-xl m-2";
  const log = "h-28 md:h-16 mb-4";
  const div_qs = "md:flex items-center";
  const ul = "sm:w-3/4";
  const bot = "text-3xl m-3 text-cyan-600 bg-gray-200 rounded-xl p-2";
  return (
    <>
      <Navigation />
      <div className="m-10 text-center">
        <h1 className="text-red-600 text-4xl sm:text-4xl md:text-6xl lg:text-8xl font-bold my-6">
          ¿Quiénes somos?
        </h1>
      </div>
      <button className={bot}>
        <Link to="/antecedentes">Antecedentes</Link>
      </button>
      <button className={bot}>
        <Link to="/socios-comerciales">Socios comerciales</Link>
      </button>
      <div className="h-12"></div>

      <div className="">
        <div className={div_qs}>
          <ul className={ul}>
            <h1 className={tit_grid}>Misión</h1>
            <li className={en_grid}>
              Ser un despacho que brinde seguridad y confianza, conforme a las
              necesidades particulares de cada persona, mediante servicios y
              soluciones de excelencia y calidad que permitan a todos nuestros
              clientes tener una protección ya sea para su persona, familia o
              patrimonio garantizando bienestar y tranquilidad a nuestros
              asegurados.
            </li>
          </ul>
          <img src={objetivo} alt="" className={log} />
        </div>

        <div className={div_qs}>
          <ul className={ul}>
            <h1 className={tit_grid}>Valores</h1>
            <li className={en_grid}>Integridad, respeto y confianza</li>
            <li className={en_grid}>Competitividad</li>
            <li className={en_grid}>Colaboración</li>
            <li className={en_grid}>Profesionalismo</li>
            <li className={en_grid}>Honestidad</li>
          </ul>
          <img src={valores} className={log} alt="" />
        </div>

        <div className={div_qs}>
          <ul className={ul}>
            <h1 className={tit_grid}>Visión</h1>
            <li className={en_grid}>
              Ser un despacho conformado por un grupo de profesionales con
              experiencia, ética y actitud de servicio para cubrir las
              expectativas de nuestros clientes.
            </li>
            <li className={en_grid}>
              Convertirnos en el principal despacho de nuestros clientes
            </li>
            <li className={en_grid}>
              Lograr una relación de confianza, sólida y duradera con nuestros
              asegurados.
            </li>
          </ul>
          <img src={vision} className={log} alt="" />
        </div>
        <div className={div_qs}>
          <ul className={ul}>
            <h1 className={tit_grid}>Objetivos</h1>
            <li className={en_grid}>
              Brindar servicios integrales y de calidad en todos los ramos con
              el objetivo de cubrir cada una de las necesidades de nuestros
              clientes.
            </li>
            <li className={en_grid}>
              Proporcionar a todos nuestros clientes una mayor certidumbre y
              tranquilidad sobre situaciones imprevistas de la vida.
            </li>
            <li className={en_grid}>
              Otorgar de manera oportuna asesoría en la administración de
              riesgos y respaldo que cada uno de nuestros clientes necesite para
              su vida y patrimonio.
            </li>
          </ul>
          <img src={mision} className={log} alt="" />
        </div>
      </div>
      <div className="h-24"></div>
      <div className="md:flex">
        <p className="text-justify bg-cyan-600 rounded text-white m-2 p-4 text-xl">
          Somos un despacho con más de 30 años de experiencia, brindamos a
          nuestros clientes, seguridad y confianza, en base a sus necesidades
          particulares, mediante servicios y soluciones de excelencia y calidad
          que les permitan tener una protección ya sea para su persona, familia
          o patrimonio, garantizándoles bienestar y tranquilidad a todos
          nuestros asegurados.
        </p>
        <img src={gar} height="100" width="200" className="content-center" />
      </div>
    </>
  );
}

export default abouts;
