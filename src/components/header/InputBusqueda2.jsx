"use client";

import { useState } from "react";
import { getDataPrueba } from "@/helpers/getInfoTest";

import Link from "next/link";
import Select from "react-select";

const InputBusqueda2 = () => {
  return (
    <>
      <div className="flex justify-center flex-col items-center my-10">
        <section className="flex justify-center items-center flex-col">
          <h1 className="text-[1.5rem] md:text-[2rem] text-blue-dark font-semibold mb-3">
            ¿Necesitás ayuda?
          </h1>
        </section>

        <form className="w-[95%] md:w-2/5">
          <div className="relative">
            <Select />
          </div>
        </form>
      </div>
    </>
  );
};
export default InputBusqueda2;
