import { useContext } from "react";
import { FormContext } from "@/context/FormContext";
import { BotonVolver } from "./BotonVolver";
import { BotonSiguiente } from "./BotonSiguiente";
import {
  TypeFormCheckbox,
  TypeFormFile,
  TypeFormInput,
  TypeFormRadio,
  TypeFormSelect,
  TypeFormTextarea,
} from "./typeform";
import { alertaSuccess, alertaTickets } from "@/helpers/Alertas";
import { useRouter } from "next/navigation";
import { sendDataTickets } from "@/helpers/getInfoTest";

export const FormsApi = ({ dataForm, lengthSteps }) => {
  const { handleSubmit, nextStep, stepsEstaticos, currentStep, reset } =
    useContext(FormContext);
  // console.log({dataForm})
  const { steps } = dataForm;
  const newSteps = [...stepsEstaticos, ...steps];
  const router = useRouter();
  const stepNow = newSteps[currentStep];

  console.log({ stepNow });

  // console.log({stepNow})
  // console.log({currentStep})

  const renderForms =
    newSteps.length > 2 &&
    newSteps.slice(2).map((item, index) => {
      // console.log({currentStep, index})
      if (currentStep === index + 2) {
        return item.fields.map((itemField, index) => {
          // console.log({itemField})
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
          if (itemField.type === "radio") {
            return <TypeFormRadio item={itemField} key={index} />;
          }
          if (itemField.type === "checkbox") {
            return <TypeFormCheckbox item={itemField} key={index} />;
          }
        });
      }
    });

  const onSubmit = async (data, event) => {
    event.preventDefault();
    // console.log({data})
    if (stepNow.checkHaveTickets === 1) {
      const { categoryId } = stepNow;
      const keyCategory = Object.keys(categoryId)[0];
      const info = await sendDataTickets( `https://testapi.tuentrada.com/api/v1/atencion-cliente/search/tickets`, data.email, keyCategory );
      console.log({ info });
      if (info?.data?.tickets[0].closeForm) {
        const ticketNumber = info?.data?.tickets[0].number;
        const status = info?.data?.tickets[0].status;
        const date = info?.data?.tickets[0].dateCreated;
        alertaTickets("Gracias por contactarte", ticketNumber, date, status);
        reset();
        router.push("/");
        return;
      }
    }
    if (!(currentStep + 1 === lengthSteps)) {
      nextStep();
    }

    if (currentStep + 1 === lengthSteps) {
      // const info = await getDataPrueba( `https://testapi.tuentrada.com/api/v1/atencion-cliente/create/form` );

      console.log("se envia form final");
      console.log({ data });
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
