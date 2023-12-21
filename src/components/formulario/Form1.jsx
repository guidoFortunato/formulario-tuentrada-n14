"use client";
import { useContext, useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import { FormContext } from "@/context/FormContext";
import { BotonSiguiente, BotonVolver } from ".";
import { getDataPrueba, sendDataEmail } from "@/helpers/getInfoTest";

export const Form1 = ({ lengthSteps, dataForm }) => {
  
  const { register,  handleSubmit,  errors,  watch,  nextStep,  handleContacto,  reset } = useContext(FormContext);
  const [captcha, setCaptcha] = useState("");
  const [errorRecaptcha, setErrorRecaptcha] = useState(false);

  const handleRecaptcha = (e) => {
    setCaptcha(e)
    setErrorRecaptcha(false)
  }



  useEffect(() => {
    handleContacto(null);
    reset();
  }, []);

  const onSubmit = async (data, event) => {
    event.preventDefault();
    if (captcha === "") {
      setErrorRecaptcha(true)
      console.log('falta clickear en el captcha')
      return
    }
    
    console.log("se envia form 1");
    const info = await sendDataEmail(
      "https://testapi.tuentrada.com/api/v1/atencion-cliente/search/contact",
      data.email
    );
    // console.log({ info });
    console.log({ data });
    if (info?.status) {
      handleContacto({
        id: info.data.contact.id,
        document: info.data.contact.document,
        first_name: info.data.contact.first_name,
        last_name: info.data.contact.last_name,
        phone_number1: info.data.contact.phone_number1,
      });
    }

    nextStep();
  };

  return (
    <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-4 mb-4 grid-cols-1 sm:grid-cols-2">
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-300 block w-full p-2.5"
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
            type="text"
            name="emailConfirm"
            id="emailConfirm"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-300 focus:border-blue-dark block w-full p-2.5"
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
        <div className="mx-auto md:mx-0">
          <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} onChange={handleRecaptcha} />
          {errorRecaptcha && (
            <span className="text-red-600 text-sm block mt-1">
              Este campo es obligatorio
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
