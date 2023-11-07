"use client";
import { Form2 } from "@/components/formulario";
import { Form1 } from "@/components/formulario/Form1";
import { useFormSteps } from "@/hooks/useFormSteps";
import { createContext, useState } from "react";
import { useForm } from "react-hook-form";
export const FormContext = createContext();

const FormProvider = ({ children }) => {
  // eslint-disable-next-line react/jsx-key
  const formComponents = [ <Form1  />, <Form2 />];
  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm()
  const { currentStep, currentComponent, changeStep, isFirstStep, isLastStep } = useFormSteps(formComponents);
  const lengthSteps = 2;

  return (
    <FormContext.Provider value={{register, handleSubmit, errors, watch, reset, currentStep, currentComponent, changeStep, isFirstStep, isLastStep, lengthSteps}}>{children}</FormContext.Provider>
  );
};

export default FormProvider;
