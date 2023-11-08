import { FormContext } from "@/context/FormContext";
import { useContext } from "react";
import { Form1, Form2, Form3, FormsApi } from "./";

export const FormStep = ({newLengthSteps, dataForm}) => {
  const { currentStep } = useContext(FormContext);

  switch (currentStep) {
    case 0:
      return <Form1 newLengthSteps={newLengthSteps} />;
    case 1:
      return <Form2 newLengthSteps={newLengthSteps} />;
    case 2:
      return <FormsApi dataForm={dataForm} newLengthSteps={newLengthSteps} />;
    case 3:
      return <Form3 newLengthSteps={newLengthSteps} />;
  }
};
