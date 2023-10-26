import InputBusqueda from "@/components/header/InputBusqueda";
import Articulo from "@/components/main/Articulo";

const page = ({ params }) => {
  return (
    <>
      <InputBusqueda />
      <Articulo subcategoria={params.subcategoria} />
    </>
  );
};
export default page;
