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
     <div className="mb-5">
     <h2 className="text-2xl text-blue-dark font-semibold">
       Completá la información
      </h2>
      <span className="text-sm text-gray-500   italic">
      Devoluciones » Protege TuEntrada » No me puedo loguear
        </span>
     </div>
      <Steps dataForm={dataForm} />

      <FormStep dataForm={dataForm} />
    </div>
  );
};
