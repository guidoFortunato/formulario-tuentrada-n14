"use client";

import { useState } from "react";
import { animateScroll as scroll } from "react-scroll";

const Accordion = ({data}) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prevState) => !prevState);

    // Si el acordeón se abre (open === true), realiza un desplazamiento suave al final de la página
    if (!open) {
      scroll.scrollToBottom({
        duration: 500, // Duración de la animación en milisegundos
        smooth: "easeInOutQuart", // Tipo de animación
      });
    }
  };

  return (
    <div className="accordion flex justify-center flex-col items-center pt-2">
      <button
        className="accordion-button py-1 px-7 sm:w-[auto] lg:w-[20%] bg-slate-800 opacity-70 rounded-t-xl text-white active:bg-blue-700 active:opacity-70 "
        onClick={handleClick}
      >
        {open ? "CERRAR ▲" : "MÁS INFORMACIÓN ▼"}
      </button>
      <div
        className={`accordion-content ${
          open ? "max-h-screen" : "max-h-0"
        } transition-max-h ease-in-out duration-500 overflow-hidden w-full ${open && "border-t border-[#8d858959]"}`}
      >
        <div
          className={`accordion-content ${
            open ? "max-h-screen" : "max-h-0"
          } transition-max-h ease-in-out duration-500 overflow-hidden w-full border-t border-[#8d858959]`}
        >
          <div className="py-5 border-[#8d858959] flex justify-evenly flex-col md:flex-row text-gray-200 mb-2 text-lg font-semibold">
            <div className="text-center mt-5 md:mt-0">
              <p>Categorías</p>
              <ul className="text-[12px] font-normal leading-relaxed text-gray-400">

                <li>
                  <a href="#" target="_new">
                    Conciertos
                  </a>
                </li>
                <li>
                  <a href="#" target="_new">
                    Exposiciones
                  </a>
                </li>
                <li>
                  <a href="#" target="_new">
                    Familia
                  </a>
                </li>
                <li>
                  <a href="#" target="_new">
                    Teatro
                  </a>
                </li>
                <li>
                  <a href="#" target="_new">
                    Deportes
                  </a>
                </li>
                <li>
                  <a href="#" target="_new">
                    Cine
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center mt-5 md:mt-0">
              <p>La empresa</p>
              <ul className="text-[12px] font-normal leading-relaxed text-gray-400">
                <li>
                  <a href="#" target="_new">
                    Quienes somos
                  </a>
                </li>

                <li>
                  <a href="#" target="_new">
                    Descargar logos
                  </a>
                </li>
                <li>
                  <a href="#" target="_new">
                    Términos y condiciones
                  </a>
                </li>
                <li>
                  <a href="#" target="_new">
                    Contáctenos
                  </a>
                </li>
                <li>
                  <a href="#" target="_new">
                    TuBoleta Colombia
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center mt-5 md:mt-0">
              <p>Enlaces de interés</p>
              <ul className="text-[12px] font-normal leading-relaxed text-gray-400">
                <li>
                  <a href="#" target="_new">
                    Botón de arrepentimiento
                  </a>
                </li>
                <li>
                  <a href="#" target="_new">
                    Protege TuEntrada
                  </a>
                </li>
                <li>
                  <a href="#" target="_new">
                    Familia
                  </a>
                </li>
                <li>
                  <a href="#" target="_new">
                    Requisitos de imágenes
                  </a>
                </li>
                <li>
                  <a href="#" target="_new">
                    TuEntrada Wallet
                  </a>
                </li>
                <li>
                  <a href="#" target="_new">
                    Fan a Fan
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
