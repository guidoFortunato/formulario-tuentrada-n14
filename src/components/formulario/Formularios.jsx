"use client";

import { useRouter } from "next/navigation";
import { FormStep, Steps } from ".";
import { useEffect } from "react";
import { Loader } from "../loading";

export const Formularios = ({ dataForm }) => {
  
  const router = useRouter()
  useEffect(() => {
    // Si dataForm es undefined, redirigir al inicio
    if (dataForm === undefined) {
      router.push('/');
    }
  }, [dataForm]);

  // Si dataForm es undefined, no renderizar el resto del componente
  if (dataForm === undefined) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto bg-main-image bg-no-repeat bg-left-50  px-10 md:px-20 flex-1">
      <h2 className="text-2xl text-blue-dark font-semibold mb-10">
        Formulario
      </h2>

      <Steps dataForm={dataForm} />

      <FormStep dataForm={dataForm} />
    </div>
  );
};
