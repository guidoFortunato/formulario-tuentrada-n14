"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Articulo = ({subcategoria}) => {
  return (
    <div className="container mx-auto bg-main-image bg-no-repeat bg-left-50 pb-10 px-10 md:px-20 flex-1">
      <h2 className="text-2xl text-blue-dark font-semibold">
        Devoluciones: Recuperar Contraseña
      </h2>
      <section className="w-full text-justify items-center justify-items-center flex flex-col mx-auto mt-4">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
          tempore sapiente autem, ab animi consectetur magni? Obcaecati
          officiis, ratione laudantium placeat in ad nam tempore maiores.
          Suscipit error nam repellendus sunt, eveniet, aspernatur nulla laborum
          dolore rerum perferendis natus sit ratione minus obcaecati similique
          dolor exercitationem pariatur ut eligendi. Eaque neque quaerat, atque
          nihil quasi deleniti, totam error dolorem eos dolor consectetur
          assumenda provident vitae odit velit omnis nemo blanditiis aliquid!
          Possimus exercitationem nobis repellat, sapiente voluptas debitistotam
          error dolorem eos dolor consectetur assumenda provident vitae odit
          velit omnis nemo blanditiis aliquid! Possimus exercitationem nobis
          repellat, sapiente voluptas debitis{" "}
        </p>

        <Image
          src="https://picsum.photos/1720/450"
          alt="TuEntrada"
          width={1720}
          height={450}
          priority
          className="rounded-lg border border-gray-300 mt-10 hidden lg:flex"
        />
        <Image
          src="https://picsum.photos/600/400"
          alt="TuEntrada"
          width={500}
          height={400}
          priority
          className="rounded-lg border border-gray-300 mt-10 lg:hidden"
        />
        <p className="mt-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
          tempore sapiente autem, ab animi consectetur magni? Obcaecati
          officiis, ratione laudantium placeat in ad nam tempore maiores.
          Suscipit error nam repellendus sunt, eveniet, aspernatur nulla laborum
          dolore rerum perferendis natus sit ratione minus obcaecati similique
          dolor exercitationem pariatur ut eligendi. Eaque neque quaerat, atque
          nihil quasi deleniti, totam error dolorem eos dolor consectetur
          assumenda provident vitae odit velit omnis nemo blanditiis aliquid!
          Possimus exercitationem nobis repellat, sapiente voluptas debitis{" "}
        </p>
      </section>

      <Link href={`${subcategoria}/formulario`} className="flex justify-center">
        <button
          type="button"
          className="text-white bg-gradient-to-r from-blue-light to-blue-dark hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300  font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-10"
        >
          Completar Formulario
        </button>
      </Link>
    </div>
  );
};

export default Articulo;
