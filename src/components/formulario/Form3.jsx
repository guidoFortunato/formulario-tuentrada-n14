import { useContext } from "react";
import { FormContext } from "@/context/FormContext";
import { BotonSiguiente, BotonVolver } from ".";


export const Form3 = ({ dataForm, lengthSteps }) => {
  
  const { register, handleSubmit, errors, watch, reset } = useContext(FormContext);

  const onSubmit = (data, event) => {
    event.preventDefault();
    console.log("se envia form final");
    console.log({ data });
  };

  return (
    <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-4 mb-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Descripción
          </label>
          <input
            type="text"
            name="description"
            id="description"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-300 focus:border-blue-dark block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Ingrese su nombre"
            {...register("description", {
              required: {
                value: true,
                message: "La descripción es obligatoria",
              },
            })}
          />
          {errors.description && (
            <span className="text-red-600 text-sm block mt-1">
              {errors.description.message}
            </span>
          )}
        </div>
      </div>
      <div className="justify-center flex pb-10">
        <BotonVolver />
        <BotonSiguiente lengthSteps={lengthSteps} />
      </div>
    </form>
  );
};
