import { Formularios } from "@/components/formulario/Formularios";
import InputBusqueda from "@/components/header/InputBusqueda";
import FormProvider from "@/context/FormContext";
// import getData from "@/helpers/getData";
import { getDataPrueba } from "@/helpers/getInfoTest";

async function FormPage({ params }) {
  // console.log({paramsForm: params})

  const info = await getDataPrueba(
    `https://testapi.tuentrada.com/api/v1/atencion-cliente/articulo/${params.subcategoria}/formulario`
  );

  // console.log({infoForm: info.data.steps})
  // console.log({ info: info.data.form.fields });
  const dataForm = info.data;

  return (
    <>
      <InputBusqueda />
      <FormProvider>
        <Formularios dataForm={dataForm} />
      </FormProvider>
    </>
  );
}

export default FormPage;
