"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Articulo = ({ subcategoria }) => {
  return (
    <div className=" container mx-auto bg-main-image bg-no-repeat bg-left-50 pb-10 px-10 md:px-20 flex-1">
      <h2 className="text-2xl text-blue-dark font-semibold mb-10">
        Devoluciones: Recuperar Contraseña
      </h2>
      <section className="w-full grid grid-cols-1  lg:grid-cols-6 gap-5 lg:gap-3 mx-auto mt-4">
        <div className="col-span-4 order-2 lg:order-1">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
            tempore sapiente autem, ab animi consectetur magni? Obcaecati
            officiis, ratione laudantium placeat in ad nam tempore maiores.
            Suscipit error nam repellendus sunt, eveniet, aspernatur nulla
            laborum dolore rerum perferendis natus sit ratione minus obcaecati
            similique dolor exercitationem pariatur ut eligendi. Eaque neque
            quaerat, atque nihil quasi deleniti, totam error dolorem eos dolor
            consectetur assumenda provident vitae odit velit omnis nemo
            blanditiis aliquid! Possimus exercitationem nobis repellat, sapiente
            voluptas debitistotam error dolorem eos dolor consectetur assumenda
            provident vitae odit velit omnis nemo blanditiis aliquid! Possimus
            exercitationem nobis repellat, sapiente voluptas debitis{" "}
          </p>

          
          <Image
            src="https://picsum.photos/600/400"
            alt="TuEntrada"
            width={700}
            height={400}
            priority
            className="rounded-lg border border-gray-300 mt-10 "
          />
          <p className="mt-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
            tempore sapiente autem, ab animi consectetur magni? Obcaecati
            officiis, ratione laudantium placeat in ad nam tempore maiores.
            Suscipit error nam repellendus sunt, eveniet, aspernatur nulla
            laborum dolore rerum perferendis natus sit ratione minus obcaecati
            similique dolor exercitationem pariatur ut eligendi. Eaque neque
            quaerat, atque nihil quasi deleniti, totam error dolorem eos dolor
            consectetur assumenda provident vitae odit velit omnis nemo
            blanditiis aliquid! Possimus exercitationem nobis repellat, sapiente
            voluptas debitis{" "}
          </p>
        </div>
        <div className="col-span-2 order-1 lg:order-2">
          <div className="w-auto sticky top-10 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
            <a
              href="#"
              aria-current="true"
              className="block w-full px-4 py-2 text-white bg-blue-dark border-b border-gray-200 rounded-t-lg cursor-pointer dark:bg-gray-800 dark:border-gray-600"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-dark focus:outline-none focus:ring-2 focus:ring-blue-dark focus:text-blue-dark dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-dark focus:outline-none focus:ring-2 focus:ring-blue-dark focus:text-blue-dark dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Lorem ipsum dolor sit amet consectetur
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-dark focus:outline-none focus:ring-2 focus:ring-blue-dark focus:text-blue-dark dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Lorem ipsum, dolor sit amet
            </a>
          </div>
        </div>
      </section>

      <Link href={`${subcategoria}/formulario`} className="flex justify-center">
        <button
          type="button"
          className="text-white bg-gradient-to-r from-blue-light to-blue-dark hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:blue-dark  font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-10"
        >
          Completar Formulario
        </button>
      </Link>
    </div>
  );
};

export default Articulo;
