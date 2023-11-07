import { useContext } from "react";
import { FormContext } from "@/context/FormContext";

export const BotonVolver = () => {
  const { changeStep, currentStep, isFirstStep  } = useContext(FormContext);
  return (
    <>
      {!isFirstStep && (
        <button
          type="button"
          className="text-white bg-gradient-to-r from-gray-300 to-gray-500 focus:ring-4 focus:outline-none opacity-70 focus:ring-blue-300  font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-10 w-[150px]"
          onClick={() => changeStep(currentStep - 1)}
        >
          Volver
        </button>
      )}
    </>
  );
};