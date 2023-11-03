"use client";
import { useForm } from "@/hooks/useForm";
import {
  BotonSiguiente,
  BotonVolver,
  BotonVolverDisabled,
  ContainerForm1,
  ContainerForm2,
  ContainerForm3,
  Steps,
} from "./";

export const Formularios = ({ dataForm }) => {
  // eslint-disable-next-line react/jsx-key
  const formComponents = [ <ContainerForm1 />, <ContainerForm2 />, <ContainerForm3 />, ];
  //   console.log({dataForm})

  const { currentStep, currentComponent, changeStep, isFirstStep, isLastStep } = useForm(formComponents);

  return (
    <div className="container mx-auto bg-main-image bg-no-repeat bg-left-50  px-10 md:px-20 flex-1">
      <h2 className="text-2xl text-blue-dark font-semibold mb-10">
        Formulario
      </h2>
      <Steps currentStep={currentStep}/>
      <form
        action="#"
        className="mt-10"
        onSubmit={(e) => changeStep(currentStep + 1, e)}
      >
        {currentComponent}
        <div className="justify-center flex pb-10">
          <BotonVolver changeStep={changeStep} currentStep={currentStep} isFirstStep={isFirstStep} />
          <BotonSiguiente changeStep={changeStep} currentStep={currentStep} isLastStep={isLastStep} />
        </div>
      </form>
    </div>
  );
};
