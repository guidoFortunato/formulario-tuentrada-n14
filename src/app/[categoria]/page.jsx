import SubCategoria from "@/components/main/SubCategoria";
import { getDataPrueba } from "@/helpers/getInfoTest";

export const generateMetadata = ({params})=>{
  let primerLetra;
  let resto;
  let title;
  let primerParte;

  primerLetra = params.categoria.split('-')[0].slice(0,1).toUpperCase()
  resto = params.categoria.split('-').join(" ")
  title = primerLetra + resto.slice(1)
  
  if (params.categoria.split('-')[0].includes("tuentrada")) {
    primerParte = "TuEntrada"
    title = primerParte + resto.slice(9)
  }
  // console.log({title})
  return {
    title: title
  }
}

const Subcategoria = async ({ params }) => {
  console.log({params});
  const info = await getDataPrueba(`https://testapi.tuentrada.com/api/v1/atencion-cliente/category/${params.categoria}`);
  const category = info.data?.category;
  return (
    <>
      <SubCategoria category={category} params={params}/>
    </>
  );
};

export default Subcategoria;
