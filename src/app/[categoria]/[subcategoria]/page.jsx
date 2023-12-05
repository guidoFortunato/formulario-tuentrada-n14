
import Articulo from "@/components/main/Articulo";
import { getDataPrueba } from "@/helpers/getInfoTest";

export const generateMetadata = ({params})=>{
  // console.log({paramsMetadata: params})
  let primerLetra;
  let resto;
  let title;
  let primerParte;

  primerLetra = params.categoria.split('-')[0].slice(0,1).toUpperCase()
  resto = params.categoria.split('-').join(" ") + " - " + params.subcategoria.split('-').join(" ")
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

const ItemSubCategorie = async({ params }) => {
  // console.log({params})
  const info = await getDataPrueba(`https://testapi.tuentrada.com/api/v1/atencion-cliente/article/${params.subcategoria}`);
  // console.log({info})
  // console.log({ItemSubCategorie: info.data})
  // console.log({dataArticle: info.data?.article})
  return (
    <>
      <Articulo params={params} data={info?.data} dataArticle={info?.data?.article} />
    </>
  );
};
export default ItemSubCategorie;