import { FormContext } from "@/context/FormContext";
import { useContext } from "react";
import { Form1 } from "./Form1";
import { Form2 } from ".";
import { Form3 } from "./Form3";

export const FormStep = () => {
  const { currentStep } = useContext(FormContext);

  switch (currentStep) {
    case 0:
      return <Form1 />;
    case 1:
      return <Form2 />;
    default:
      return <Form3 />;
  }
};
