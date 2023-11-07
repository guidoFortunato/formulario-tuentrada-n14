import { useContext } from "react";
import { FormContext } from "@/context/FormContext";

export const ContainerForm3 = () => {
  const { register, errors } = useContext(FormContext);
  return (
    <div className="grid gap-4 mb-4 sm:grid-cols-2">
      <div>
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Descripcion
        </label>
        <input
          type="text"
          name="description"
          id="description"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-300 focus:border-blue-dark block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Ingrese descripción"
          {...register("description", {
            required: true

          })}
        />
      </div>
    </div>
  );
};
