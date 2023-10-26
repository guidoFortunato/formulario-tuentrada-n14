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
          <h3
            id="subtitulo1"
            className="text-lg font-semibold text-blue-dark my-5"
          >
            Subtítulo del Artículo 1
          </h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
            tempore sapiente autem, ab animi consectetur magni? Obcaecati
            officiis, ratione laudantium placeat in ad nam tempore maiores.{" "}
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
          <h3
            id="subtitulo2"
            className="text-lg font-semibold text-blue-dark my-5"
          >
            Subtítulo del Artículo 2
          </h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
            tempore sapiente autem, ab animi consectetur magni? Obcaecati
            officiis, ratione laudantium placeat in ad nam tempore maiores.
            Suscipit error nam repellendus sunt, eveniet, aspernatur nulla
            laborum dolore rerum perferendis natus sit ratione minus obcaecati
            similique dolor exercitationem pariatur ut eligendi. Eaque neque
            quaerat, atque nihil quasi deleniti, totam error dolorem eos dolor
            consectetur assumenda provident vitae odit velit omnis nemo
            blanditiis aliquid! Possimus exercitationem nobis repellat, sapiente{" "}
          </p>

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

          <h3
            id="subtitulo3"
            className="text-lg font-semibold text-blue-dark my-5"
          >
            Subtítulo del Artículo 3
          </h3>
          <p>
            erferendis natus sit ratione minus obcaecati similique dolor
            exercitationem pariatur ut eligendi. Eaque neque quaerat, atque
            nihil quasi deleniti, totam error dolorem eos dolor consectetur
            assumenda provident vitae odit velit omnis nemo blanditiis aliquid!
            Possimus exercitationem nobis repellat, sapiente voluptas
            debitistotam error dolorem eos dolor consectetur assumenda provident
            vitae odit velit omnis nemo blanditiis aliquid! Possimus
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

          <h3
            id="subtitulo4"
            className="text-lg font-semibold text-blue-dark my-5"
          >
            Subtítulo del Artículo 4
          </h3>
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
        </div>
        <div className="lg:col-span-2  col-span-4 order-1 lg:order-2">
          <div className="w-auto sticky top-10 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
            <a
              href="#subtitulo1"
              aria-current="true"
              className="block w-full px-4 py-2 text-white bg-blue-dark border-b border-gray-200 rounded-t-lg cursor-pointer dark:bg-gray-800 dark:border-gray-600"
            >
              Subtítulo del Artículo 1
            </a>
            <a
              href="#subtitulo2"
              className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-dark focus:outline-none focus:ring-2 focus:ring-blue-dark focus:text-blue-dark dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Subtítulo del Artículo 2
            </a>
            <a
              href="#subtitulo3"
              className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-dark focus:outline-none focus:ring-2 focus:ring-blue-dark focus:text-blue-dark dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Subtítulo del Artículo 3
            </a>
            <a
              href="#subtitulo4"
              className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-dark focus:outline-none focus:ring-2 focus:ring-blue-dark focus:text-blue-dark dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Subtítulo del Artículo 4
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

      <div className="flex justify-evenly mt-24">
        <div>
          <h4 className="text-blue-dark font-semibold">Artículos relacionados</h4>
          <ol>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit. Lorem ipsum dolor sit.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</li>
          </ol>
        </div>
        <div>
        <h4 className="text-blue-dark font-semibold">Artículos más vistos</h4>
          <ol>
          <li>Lorem, ipsum. Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit. Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
            <li>Lorem, ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit..</li>
            <li>Lorem ipsum dolor sit amet.lorem2 Lorem, ipsum dolor.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Articulo;
