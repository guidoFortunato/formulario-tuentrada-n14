"use client";
import { useContext } from "react";

import { FormContext } from "@/context/FormContext";
import { BotonSiguiente, BotonVolver } from ".";
import { getDataPrueba } from "@/helpers/getInfoTest";

export const Form1 = ({dataForm, newLengthSteps }) => {

  // console.log({dataForm})  

  const { register, handleSubmit, errors, watch, reset, nextStep } = useContext(FormContext); 
  
  
  const onSubmit = async (data, event) => {
    event.preventDefault();
    //const info = await getDataPrueba(`https://testapi.tuentrada.com/api/v1/atencion-cliente/contact/a.r.hamze@live.com`);
    // console.log({ info });
    console.log("se envia form 1");
    console.log({ data });
    nextStep();
    // reset()
  };

  return (
    <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
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
                message: "El email es obligatorio",
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
                message: "El email es obligatorio",
              },
              validate: (value) => {
                return (
                  value === watch("email") || "Los emails deben ser iguales"
                );
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
      <div className="justify-center flex pb-10">
        <BotonVolver />
        <BotonSiguiente newLengthSteps={newLengthSteps} />
      </div>
    </form>
  );
};
