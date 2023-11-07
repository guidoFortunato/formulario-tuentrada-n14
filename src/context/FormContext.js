"use client";
import { createContext, useState } from "react";
import { useForm } from "react-hook-form";
export const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(3);
  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm()
  
  const lengthSteps = 2;

  const nextStep = ()=> {
    setCurrentStep( prev => prev + 1 )
  }
  const prevStep = ()=> {
    setCurrentStep( prev => prev - 1 )
  }

  return (
    <FormContext.Provider value={{register, handleSubmit, errors, watch, reset, currentStep, nextStep, prevStep, lengthSteps}}>{children}</FormContext.Provider>
  );
};

export default FormProvider;
