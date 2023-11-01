import InputBusqueda from "@/components/header/InputBusqueda";
import Articulo from "@/components/main/Articulo";

const ItemSubCategorie = ({ params }) => {
  return (
    <>
      <InputBusqueda />
      <Articulo subcategoria={params.subcategoria} />
    </>
  );
};
export default ItemSubCategorie;