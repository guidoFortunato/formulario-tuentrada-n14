"use client";
import { useContext } from "react";
import { FormContext } from "@/context/FormContext";

import { Form2, FormStep, Steps } from ".";
import { Form1 } from "./Form1";
import { Form3 } from "./Form3";
import { useFormSteps } from "@/hooks/useFormSteps";

// eslint-disable-next-line react/jsx-key
const formComponents = [ <Form1  />, <Form2 />];

export const Formularios = ({ dataForm }) => {
  const { currentStep, lengthSteps } = useContext(FormContext);
  const { currentComponent } = useFormSteps(formComponents);
  const newLengthSteps = lengthSteps + dataForm.steps.length
  console.log({currentStep})

  return (
    <div className="container mx-auto bg-main-image bg-no-repeat bg-left-50  px-10 md:px-20 flex-1">
      <h2 className="text-2xl text-blue-dark font-semibold mb-10">
        Formulario
      </h2>
      
      <Steps />

      <FormStep />

      {/* {currentComponent} */}
      
      {/* <Form1 dataForm={dataForm} newLengthSteps={newLengthSteps} /> */}
      
      {/* {
        currentStep === 0 ? <Form1 dataForm={dataForm} newLengthSteps={newLengthSteps} /> : currentStep === 1 ? <Form2 dataForm={dataForm} newLengthSteps={newLengthSteps} /> : <Form3 dataForm={dataForm} newLengthSteps={newLengthSteps}  />
      } */}
      
     
    </div>
  );
};
