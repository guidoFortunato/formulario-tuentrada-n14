import { useContext } from "react";
import { FormContext } from "@/context/FormContext";
import { BotonVolver } from "./BotonVolver";
import { BotonSiguiente } from "./BotonSiguiente";
import { TypeFormFile, TypeFormInput, TypeFormSelect, TypeFormTextarea } from "./typeform";

export const FormsApi = ({ dataForm, newLengthSteps }) => {
  const { register, handleSubmit, errors, watch, reset, nextStep } = useContext(FormContext);
  // console.log({ dataForm });

  // const fieldsForStep = dataForm.fields.filter((item) => item.stepId === step.id);
  // const fieldsForStep = dataForm.steps.map((itemStep) => {
  //   dataForm.fields.filter((itemField) => itemField.stepId === itemStep.id);
  // });
  const renderFields = dataForm.fields.map((item, index) => {
    if (item.type === "input") {
      return (
        <TypeFormInput item={item} key={index} />
      );
    }
    if (item.type === "textArea") {
      return (
        <TypeFormTextarea item={item} key={index} />
      );
    }
    if (item.type === "file") {
      return (
        <TypeFormFile item={item} key={index} />
      );
    }
    if (item.type === "select") {
      return (
        <TypeFormSelect item={item} key={index} />
      );
    }
    return null;
  });

  // console.log({ errors });
  const onSubmit = async (data, event) => {
    event.preventDefault();
    // console.log({ info });
    console.log("se envia form api 1");
    console.log({ data });

    // reset()
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
      <div className="grid gap-4 mb-4 sm:grid-cols-2">{renderFields}</div>
      <div className="justify-center flex pb-10">
        <BotonVolver />
        <BotonSiguiente newLengthSteps={newLengthSteps} />
      </div>
    </form>
  );
};
