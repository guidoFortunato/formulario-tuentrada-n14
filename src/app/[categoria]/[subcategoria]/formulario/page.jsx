

import Form1 from "@/components/formulario/Form1";
import Form2 from "@/components/formulario/Form2";
import InputBusqueda from "@/components/header/InputBusqueda";
import getData from "@/helpers/getData";
import { getDataPrueba } from "@/helpers/getDataPrueba";



async function FormPage(){
  
  const info = await getDataPrueba("https://testapi.tuentrada.com/api/v1/atencion-cliente/categories")//https://testapi.tuentrada.com/api/v1/atencion-cliente/categories
  // console.log({info: info.data.products })
  console.log({info: info.data.categories })
  return (
    <>
      <InputBusqueda />
      {/* <Form1 /> */}
      <Form2 />
    </>
  );
};

export default FormPage;
