import SubCategoria from "@/components/main/SubCategoria";
import { getDataPrueba } from "@/helpers/getInfoTest";

const Subcategoria = async ({ params }) => {
  // console.log({params});
  const info = await getDataPrueba(`https://testapi.tuentrada.com/api/v1/atencion-cliente/category/${params.categoria}`);
  const category = info.data.category;
  // console.log(category.subCategories[1]?.articles)
  return (
    <>
      <SubCategoria category={category} params={params}/>
    </>
  );
};

export default Subcategoria;
