import { useState } from "react";

export const useForm = (steps) => {
  const [currentStep, setCurrentStep] = useState(0);

  function changeStep( i, e ){
    if(e) e.preventDefault();
    // console.log({largoSteps: steps.length})
    // console.log({i})
    if(i < 0 || i >= steps.length) return
    // console.log(i)
    setCurrentStep(i)
  }

  return {
    currentStep,
    currentComponent: steps[currentStep],
    changeStep,
    isLastStep: currentStep + 1 === steps.length,
    isFirstStep: currentStep === 0
  };
};
