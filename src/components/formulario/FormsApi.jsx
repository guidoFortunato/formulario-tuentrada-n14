import { useContext } from "react";
import { FormContext } from "@/context/FormContext";
import { BotonVolver } from "./BotonVolver";
import { BotonSiguiente } from "./BotonSiguiente";
import {
  TypeFormFile,
  TypeFormInput,
  TypeFormSelect,
  TypeFormTextarea,
} from "./typeform";

export const FormsApi = ({ dataForm, lengthSteps }) => {
  const {
    register,
    handleSubmit,
    errors,
    watch,
    reset,
    nextStep,
    stepsEstaticos,
    currentStep,
  } = useContext(FormContext);

  const { steps } = dataForm;
  const newSteps = [...stepsEstaticos, ...steps];
  // console.log({ newStepsSlice: newSteps.slice(2) });

  const renderFields = newSteps.map((item) =>
    item.fields.map((field, index) => {
      if (field.type === "input") {
        return <TypeFormInput item={field} key={index} />;
      }
      if (field.type === "textArea") {
        return <TypeFormTextarea item={field} key={index} />;
      }
      if (field.type === "file") {
        return <TypeFormFile item={field} key={index} />;
      }
      if (field.type === "select") {
        return <TypeFormSelect item={field} key={index} />;
      }
    })
  );

  // console.log({ renderFields });
  const onSubmit = async (data, event) => {
    event.preventDefault();
    // console.log({ info });
    console.log("se envia form api 1");
    console.log({ data });
    if (!(currentStep + 1 === lengthSteps)) {
      nextStep();
    }
    // reset()
  };
  

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
      {/* <div className="grid gap-4 mb-4 sm:grid-cols-2">{renderFields}</div> */}
      <div className="grid gap-4 mb-4 sm:grid-cols-2">
        {
          newSteps.length > 2 && 
          newSteps.slice(2).map( (item, index) => {
            // console.log({currentStep, index})
            if (currentStep === index + 2) {
              return item.fields.map( (itemField, index) => {
                if (itemField.type === "input") {
                  return <TypeFormInput item={itemField} key={index} />;
                }
                if (itemField.type === "textArea") {
                  return <TypeFormTextarea item={itemField} key={index} />;
                }
                if (itemField.type === "file") {
                  return <TypeFormFile item={itemField} key={index} />;
                }
                if (itemField.type === "select") {
                  return <TypeFormSelect item={itemField} key={index} />;
                }
              } )
            }
          } )
        }
      </div>
      <div className="justify-center flex pb-10">
        <BotonVolver />
        <BotonSiguiente lengthSteps={lengthSteps} />
      </div>
    </form>
  );
};
