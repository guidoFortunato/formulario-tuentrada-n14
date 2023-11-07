import { useContext } from "react";
import { FormContext } from "@/context/FormContext";

export const ContainerForm2 = () => {
  const { register, errors } = useContext(FormContext);
  return (
    <div className="grid gap-4 mb-4 sm:grid-cols-2">
      <div>
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Nombre
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-300 focus:border-blue-dark block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Ingrese su nombre"
          {...register("name", {
            required: true

          })}
        />
      </div>
      <div>
        <label
          htmlFor="lastname"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Apellido
        </label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-300 focus:border-blue-dark block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Ingrese su apellido"
          {...register("lastname", {
            required: true

          })}
        />
      </div>
      <div>
        <label
          htmlFor="phone"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Teléfono
        </label>
        <input
          type="number"
          name="phone"
          id="phone"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-300 focus:border-blue-dark block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Ingrese su teléfono"
          {...register("phone")}
        />
      </div>
      <div>
        <label
          htmlFor="dni"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          DNI
        </label>
        <input
          type="text"
          name="dni"
          id="dni"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-300 focus:border-blue-dark block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Ingrese su número de documento"
          {...register("dni", {
            required: true

          })}
        />
      </div>
    </div>
  );
};
