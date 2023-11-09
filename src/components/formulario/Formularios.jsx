"use client";

import { FormStep, Steps } from ".";

export const Formularios = ({ dataForm }) => {
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
