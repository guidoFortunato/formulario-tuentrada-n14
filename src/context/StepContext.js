"use client";
import { createContext, useContext, useState } from "react";
export const StepsDataContext = createContext();

export const useDataSteps = () => {
  const context = useContext(StepsDataContext);
  if (!context) throw new Error("useDataSteps must be used within a provider");
  return context;
};

const StepsProvider = ({ children }) => {

  const [currentStep, setCurrentStep] = useState(0);

  function changeStep( i, e ){
    if(e) e.preventDefault();
    if(i < 0 || i < steps.length) return
    setCurrentStep(i)
  }

  return (
    <StepsDataContext.Provider value={currentStep}>{children}</StepsDataContext.Provider>
  );
};

export default StepsProvider;
