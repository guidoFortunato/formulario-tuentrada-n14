import SubCategoria from "@/components/main/SubCategoria";
import InputBusqueda from "@/components/header/InputBusqueda";

const page = ({params}) => {
  // console.log({params});
  return (
    <>
      <InputBusqueda />
      <SubCategoria slug={params.categoria} />
    </>
  );
};

export default page;
