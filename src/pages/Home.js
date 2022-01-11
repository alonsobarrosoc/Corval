import React from "react";
import Navigation from "../components/Navigation";

import logo from "../imgs/53139474_101025971061399_6126230540858163200_n.jpg";
import atencion from "../imgs/images.jpeg";
import cs from "../imgs/cs.jpg";

function Home() {
  return (
    <>
      <Navigation />
      <div className="grid place-items-center flex">
        <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-cyan-600 text-center">
          Profesionales en Seguros y Fianzas
        </h1>
        <img
          src={logo}
          // width='300'
          // height='300'
          className="mt-6 w-1/4"
          alt=""
        />
      </div>
      <div className="m-12 text-center font-bold text-3xl ">
        Protege lo que más quieres...
      </div>

      <div className="grid grid-cols-2 place-items-center w-screen">
        {/* <img src={atencion} alt="" className="w-screen" /> */}
        <div className="">
          <svg
            version="1.1"
            id="Layer_1"
            //   x="0px"
            //   y="0px"
            //   width="512px"
            //   height="512px"
            viewBox="0 0 512 512"
            enable-background="new 0 0 512 512"
            className="w-3/4"
            fill="#dc2626"
          >
            <path
              d="M266,55.954c0-5.453,0-10.306,0-14.402c0-0.194,0-0.552,0-0.552c0-13-20-13-20,0c0,4,0,9.184,0,14.962
	c-116,5.156-210.723,98.38-216.944,214.892c16.579-24.871,44.866-41.258,76.999-41.258c30.538,0,57.638,14.803,74.481,37.621
	C194.483,244.157,219,227.69,246,223.548c0,21.606,0,39.943,0,51.453c0,47.824,0,95.648,0,143.473c0,0.194,0,0.39,0,0.585
	c0,0.686,0.048,1.352,0.179,1.996c-1.257,21.922-18.972,39.236-41.199,39.537c-22.855,0.308-41.275-19.025-41.579-41.446
	c-0.177-13.028-20.4-13.045-20.222,0c0.46,33.924,27.897,61.208,61.789,61.665c33.912,0.458,60.951-28.498,61.396-61.665
	c0.011-0.836-0.362-1.645-0.362-2.418c0-43.538,0-87.074,0-130.608c0-14.079,0-36.925,0-63.37c26,1.837,50.213,14.928,65.904,34.555
	c16.949-21.201,43.067-34.786,72.322-34.786c33.256,0,62.347,17.553,78.648,43.896C474.533,151.922,381,60.957,266,55.954z"
            />
          </svg>
        </div>



        <div className="">
        <ul className="space-y-2 m-4">
          <li className="text-2xl flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                className="text-cyan-600"
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Garantía y seguridad
          </li>
          <li className="text-2xl flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                className="text-cyan-600"
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Atención al cliente excelente
          </li>
          <li className="text-2xl flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                className="text-cyan-600"
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Protección y privacidad
          </li>

          <li className="text-2xl flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                className="text-cyan-600"
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Los mejores precios
          </li>
          <li className="text-2xl flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                className="text-cyan-600"
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Confidencialidad absoluta
          </li>
        </ul>
        </div>
      </div>
    </>
  );
}
export default Home;
