"use client"
import { useState } from "react";

const Accordion = () => {
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    setOpen((prevstate) => !prevstate);
  };

  return (
    <div
      id="accordion-flush"
      data-accordion="collapse"
      data-active-classes="bg-white text-gray-900"
      data-inactive-classes="text-gray-500"
    >
      <h2 id="accordion-flush-heading-1">
        <button
          type="button"
          className={`flex items-center justify-center  w-full pt-3 font-medium text-left text-gray-200 ${open && "border-b border-gray-200"}`}
          data-accordion-target="#accordion-flush-body-1"
          aria-expanded="true"
          aria-controls="accordion-flush-body-1"
          onClick={handleClick}
        >
          <span className="py-1 px-7 bg-slate-800 opacity-70 rounded-t-xl text-white active:bg-blue-700 active:opacity-70 ">{open ? "CERRAR ▲":"MÁS INFORMACIÓN ▼"}</span>
          {/* <svg
            data-accordion-icon
            className="w-3 h-3 mx-2 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg> */}
        </button>
      </h2>
      <div
        id="accordion-flush-body-1"
        className={`${open ? "":"hidden"}`}
        aria-labelledby="accordion-flush-heading-1"
      >
       
        <div className="py-5 border-gray-200 flex justify-evenly flex-col md:flex-row text-gray-200 mb-2 text-lg font-semibold">
          <div className="text-center mt-5 md:mt-0">
            <p>Categorías</p>
            <ul className="text-[12px] font-normal leading-relaxed text-gray-400">
              <li><a href="#" target="_new">Conciertos</a></li>
              <li><a href="#" target="_new">Exposiciones</a></li>
              <li><a href="#" target="_new">Familia</a></li>
              <li><a href="#" target="_new">Teatro</a></li>
              <li><a href="#" target="_new">Deportes</a></li>
              <li><a href="#" target="_new">Cine</a></li>
            </ul>
          </div>
          <div className="text-center mt-5 md:mt-0">
            <p>La empresa</p>
            <ul className="text-[12px] font-normal leading-relaxed text-gray-400">
              <li><a href="#" target="_new">Quienes somos</a></li>

              <li><a href="#" target="_new">Descargar logos</a></li>
              <li><a href="#" target="_new">Términos y condiciones</a></li>
              <li><a href="#" target="_new">Contáctenos</a></li>
              <li><a href="#" target="_new">TuBoleta Colombia</a></li>
            </ul>
          </div>
          <div className="text-center mt-5 md:mt-0">
            <p>Enlaces de interés</p>
            <ul className="text-[12px] font-normal leading-relaxed text-gray-400">
              <li><a href="#" target="_new">Botón de arrepentimiento</a></li>
              <li><a href="#" target="_new">Protege TuEntrada</a></li>
              <li><a href="#" target="_new">Familia</a></li>
              <li><a href="#" target="_new">Requisitos de imágenes</a></li>
              <li><a href="#" target="_new">TuEntrada Wallet</a></li>
              <li><a href="#" target="_new">Fan a Fan</a></li>
            </ul>
          </div>
        </div>
       
      </div>
    </div>
  );
};
export default Accordion;
