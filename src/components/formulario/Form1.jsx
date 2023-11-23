"use client";
import { useContext, useEffect } from "react";

import { FormContext } from "@/context/FormContext";
import { BotonSiguiente, BotonVolver } from ".";
import { getDataPrueba, getDataPruebaPost } from "@/helpers/getInfoTest";

export const Form1 = ({lengthSteps }) => {

  // console.log({dataForm})  

  const { register, handleSubmit, errors, watch, nextStep, handleContacto, reset } = useContext(FormContext); 
  
  useEffect(() => {
    handleContacto(null)
    reset()
  }, []);

  const onSubmit = async (data, event) => {
    event.preventDefault();
    console.log("se envia form 1");
    const info = await getDataPruebaPost("https://testapi.tuentrada.com/api/v1/atencion-cliente/contact/", data.email);
    console.log({ info });
    console.log({ data });
    if (info?.status) {
      handleContacto({
        id: info.data.contact.id,
        document: info.data.contact.document,
        first_name: info.data.contact.first_name,
        last_name: info.data.contact.last_name,
        phone_number1: info.data.contact.phone_number1,
      })
    }
   
    nextStep();
    
  };

  return (
    <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-4 mb-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-300 focus-visible:border-blue-dark focus:border-blue-dark block w-full p-2.5"
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
            Confirmación de Email <span className="text-red-500">*</span>
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
        <BotonSiguiente lengthSteps={lengthSteps} />
      </div>
    </form>
  );
};
