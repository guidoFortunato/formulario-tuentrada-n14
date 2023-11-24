import { useContext, useEffect } from "react";
import { FormContext } from "@/context/FormContext";
import { BotonVolver } from "./BotonVolver";
import { BotonSiguiente } from "./BotonSiguiente";
import {
  TypeFormFile,
  TypeFormInput,
  TypeFormSelect,
  TypeFormTextarea,
} from "./typeform";
import { alertaSuccess } from "@/helpers/Alertas";
import { useRouter } from "next/navigation";

export const FormsApi = ({ dataForm, lengthSteps }) => {
  const { handleSubmit, nextStep, stepsEstaticos, currentStep, reset } =
    useContext(FormContext);

  const { steps } = dataForm;
  const newSteps = [...stepsEstaticos, ...steps];
  const router = useRouter();
  // console.log({ currentStep, lengthSteps: newSteps.length });

  const renderForms =
    newSteps.length > 2 &&
    newSteps.slice(2).map((item, index) => {
      // console.log({currentStep, index})
      if (currentStep === index + 2) {
        return item.fields.map((itemField, index) => {
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
        });
      }
    });

  // console.log({ renderFields });
  const onSubmit = async (data, event) => {
    event.preventDefault();
    // console.log({ info });
    // const newData = { ...data, fecha_de_compra: new Date(data.fecha_de_compra).toLocaleDateString() }
    // console.log({newData})
    console.log({data})
    if (!(currentStep + 1 === lengthSteps)) {
      nextStep();
    }
    if (currentStep + 1 === lengthSteps) {
      console.log("se envia form final");
      alertaSuccess();
      reset();
      router.push("/");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
      <div className="grid gap-4 mb-4 sm:grid-cols-2">{renderForms}</div>
      <div className="justify-center flex pb-10">
        <BotonVolver />
        <BotonSiguiente lengthSteps={lengthSteps} />
      </div>
    </form>
  );
};
