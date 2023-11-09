import { FormContext } from "@/context/FormContext";
import { useContext } from "react";
import { Form1, Form2, Form3, FormsApi } from "./";

export const FormStep = ({dataForm}) => {
  const { currentStep, stepsEstaticos } = useContext(FormContext);
  const { steps } = dataForm;

  const newSteps = [...stepsEstaticos, ...steps];
  const lengthSteps = newSteps.length;

  switch (currentStep) {
    case 0:
      return <Form1 lengthSteps={lengthSteps} />;
    case 1:
      return <Form2 lengthSteps={lengthSteps} />;
    default:
      return <FormsApi dataForm={dataForm} lengthSteps={lengthSteps} />;
    
  }
};
