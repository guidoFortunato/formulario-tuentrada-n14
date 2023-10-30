
// import Form1 from "@/components/formulario/Form1";
import Form2 from "@/components/formulario/Form2";
import InputBusqueda from "@/components/header/InputBusqueda";
// import getData from "@/helpers/getData";
import { getDataPrueba, getTokenPrueba } from "@/helpers/getInfoTest";


async function FormPage() {
  // console.log({info: info.data.products })
  // console.log({info: info.data.categories })

  // const info = await getDataPrueba("https://testapi.tuentrada.com/api/v1/atencion-cliente/categories");
  // console.log({ info: info.data.categories });
  // const { token, tokenExpires  } = dataToken
  // console.log({ token, tokenExpires  })
  // console.log(new Date().times)
  return (
    <>
      <InputBusqueda />
      {/* <Form1 /> */}
      <Form2 />
    </>
  );
}

export default FormPage;
