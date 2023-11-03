
// import Form1 from "@/components/formulario/Form1";
import Form2 from "@/components/formulario/Form2";
import InputBusqueda from "@/components/header/InputBusqueda";
// import getData from "@/helpers/getData";
import { getDataPrueba } from "@/helpers/getInfoTest";


async function FormPage({params}) {
 
  console.log({paramsForm: params})

  const info = await getDataPrueba(`https://testapi.tuentrada.com/api/v1/atencion-cliente/articulo/${slug}/formulario`);
  console.log({ info: info });
  
  return (
    <>
      <InputBusqueda />
      {/* <Form1 /> */}
      <Form2 />
    </>
  );
}

export default FormPage;
