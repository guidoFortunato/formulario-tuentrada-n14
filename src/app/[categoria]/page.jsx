import SubCategoria from "@/components/main/SubCategoria";
import InputBusqueda from "@/components/header/InputBusqueda";
import { getDataPrueba } from "@/helpers/getInfoTest";

const page = async ({params}) => {
  // console.log({params});
  const info = await getDataPrueba("https://testapi.tuentrada.com/api/v1/atencion-cliente/categories");
  console.log({ info: info.data.categories });
  return (
    <>
      <InputBusqueda />
      <SubCategoria slug={params.categoria} />
    </>
  );
};

export default page;
