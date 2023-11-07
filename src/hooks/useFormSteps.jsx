import { useState } from "react";

export const useFormSteps = (steps) => {
  const [currentStep, setCurrentStep] = useState(0);

  function changeStep(i, e) {
    if (e) e.preventDefault();

    if (i < 0) return;

    setCurrentStep(i);
  }

  return {
    currentStep,
    currentComponent: steps[currentStep],
    changeStep,
    isLastStep: currentStep + 1 === steps.length,
    isFirstStep: currentStep === 0,
  };
};
