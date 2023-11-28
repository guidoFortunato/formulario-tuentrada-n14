import { Formularios } from "@/components/formulario/Formularios";
import FormProvider from "@/context/FormContext";
import { getDataPrueba } from "@/helpers/getInfoTest";

export const generateMetadata = ({ params }) => {
  let primerLetra;
  let resto;
  let title;
  let primerParte;

  primerLetra = params.categoria.split("-")[0].slice(0, 1).toUpperCase();
  resto =
    params.categoria.split("-").join(" ") +
    " - " +
    params.subcategoria.split("-").join(" ");
  title = primerLetra + resto.slice(1);

  if (params.categoria.split("-")[0].includes("tuentrada")) {
    primerParte = "TuEntrada";
    title = primerParte + resto.slice(9);
  }

  return {
    title: title,
  };
};

async function FormPage({ params }) {

  const info = await getDataPrueba( `https://testapi.tuentrada.com/api/v1/atencion-cliente/articulo/${params.subcategoria}/formulario` );
  const dataForm = info.data;

  return (
    <>
      <FormProvider>
        <Formularios dataForm={dataForm} />
      </FormProvider>
    </>
  );
}

export default FormPage;
