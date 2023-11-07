import { useContext } from "react";
import { FormContext } from "@/context/FormContext";

export const ContainerForm1 = () => {
  const { register, errors, watch } = useContext(FormContext);
  // console.log(errors);

  return (
    <div className="grid gap-4 mb-4 sm:grid-cols-2">
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Email
        </label>
        <input
          name="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-300 focus:border-blue-dark block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Ingrese su email"
          {...register("email", {
            required: {
              value: true,
              message: "El Email es obligatorio",
            },
            pattern: {
              value:
                /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Ingrese un email válido",
            },
          })}
        />
        {errors.email && (
          <span className="text-red-600 text-sm block mt-1">
            {errors.email.message}
          </span>
        )}
      </div>
      <div>
        <label
          htmlFor="emailConfirm"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Confirmación de Email
        </label>
        <input
          name="emailConfirm"
          id="emailConfirm"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-300 focus:border-blue-dark block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Repita su email"
          {...register("emailConfirm", {
            required: {
              value: true,
              message: "El Email es obligatorio",
            },
            validate: (value) => {
              return value === watch("email") || "Los emails deben ser iguales";
            },
          })}
        />

        {errors.emailConfirm && (
          <span className="text-red-600 text-sm block mt-1">
            {errors.emailConfirm.message}
          </span>
        )}
      </div>
    </div>
  );
};
