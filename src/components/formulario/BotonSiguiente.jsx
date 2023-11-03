export const BotonSiguiente = ({ changeStep, currentStep, isLastStep }) => {
  // console.log({formComponentsLength, currentStep})
  return (
    <>
    {
      isLastStep ? (
        <button
        type="submit"
        className="text-white bg-gradient-to-r from-blue-light to-blue-dark hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-10 w-[150px]"
        onClick={() => console.log('enviado')}
      >
        Enviar
      </button>
      ) : (
        <button
        type="button"
        className="text-white bg-gradient-to-r from-blue-light to-blue-dark hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-10 w-[150px]"
        onClick={() => changeStep(currentStep + 1)}
      >
        Siguiente
      </button>
      )
    }
     
    </>
  );
};
