"use client";

import Link from "next/link";
import { useState } from "react";

const AccordionSubCat = ({slug}) => {
  const [open, setOpen] = useState(false);
  

  const handleClick = (e) => {
    setOpen((prevstate) => !prevstate);
  };

  return (
    <div
      id="accordion-flush"
      data-accordion="collapse"
      data-active-classes="bg-white text-gray-900"
      data-inactive-classes="text-gray-500 dark:text-gray-400"
    >
      <h2 id="accordion-flush-heading-1">
        <button
          type="button"
          className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200"
          data-accordion-target="#accordion-flush-body-1"
          aria-expanded="true"
          aria-controls="accordion-flush-body-1"
          onClick={handleClick}
        >
          <span>Problemas al iniciar sesión</span>
          <svg
            data-accordion-icon
            className="w-3 h-3 rotate-180 shrink-0"
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
          </svg>
        </button>
      </h2>
      <div
        id="accordion-flush-body-1"
        className={open ? "" : "hidden"}
        aria-labelledby="accordion-flush-heading-1"
      >
        <div className="py-5 border-b border-gray-200">
          
          <p className="text-gray-500">
            
            <Link
              href={`${slug}/recuperar-contrasenia`}
              className="text-blue-600 hover:underline"
            >
              Recuperar contraseña
            </Link>{" "}
            
          </p>
          <p className="text-gray-500">
            
            <Link
              href={`${slug}/recuperar-contrasenia`}
              className="text-blue-600 hover:underline"
            >
             Recuperar contraseña
            </Link>
            
          </p>
       
        </div>
      </div>
    </div>
  );
};

export default AccordionSubCat;
