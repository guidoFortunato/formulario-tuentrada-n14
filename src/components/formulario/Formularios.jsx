"use client";
import { useContext } from "react";
import { FormContext } from "@/context/FormContext";

import { FormStep, Steps } from ".";

export const Formularios = ({ dataForm }) => {
  const { lengthSteps } = useContext(FormContext);
  const newLengthSteps = 0
  // console.log({currentStep})

  return (
    <div className="container mx-auto bg-main-image bg-no-repeat bg-left-50  px-10 md:px-20 flex-1">
      <h2 className="text-2xl text-blue-dark font-semibold mb-10">
        Formulario
      </h2>

      <Steps newLengthSteps={newLengthSteps} dataForm={dataForm} />

      <FormStep newLengthSteps={newLengthSteps} dataForm={dataForm} />
    </div>
  );
};
