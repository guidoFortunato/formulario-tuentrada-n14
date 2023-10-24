"use client"

import Form1 from "@/components/formulario/Form1";
import Form2 from "@/components/formulario/Form2";
import InputBusqueda from "@/components/header/InputBusqueda";
import getData from "@/helpers/getData";
import { useEffect, useState } from "react";

const FormPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
   
      const getInfo = async () => {
        const { data } = await getData(
          "https://testapi.tuentrada.com/api/v1/site/venue/",
          "gfortunato@tuentrada.com",
          "Correa.3030"
        );
        // console.log({dataCalendario: data})
        setData(data);
      };
      // getInfo();
    
  }, []);
  return (
    <>
      <InputBusqueda />
      {/* <Form1 /> */}
      <Form2 />
    </>
  );
};

export default FormPage;
