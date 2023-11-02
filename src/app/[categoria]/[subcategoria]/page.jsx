import InputBusqueda from "@/components/header/InputBusqueda";
import Articulo from "@/components/main/Articulo";
import { getDataPrueba } from "@/helpers/getInfoTest";

const ItemSubCategorie = async({ params }) => {
  const info = await getDataPrueba(`https://testapi.tuentrada.com/api/v1/atencion-cliente/articulo/${params.subcategoria}`);
  // console.log(info.data)
  return (
    <>
      <InputBusqueda />
      <Articulo subcategoria={params.subcategoria} dataArticle={info.data.article} />
    </>
  );
};
export default ItemSubCategorie;