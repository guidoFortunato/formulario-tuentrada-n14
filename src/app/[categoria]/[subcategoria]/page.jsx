
import Articulo from "@/components/main/Articulo";
import { getDataPrueba } from "@/helpers/getInfoTest";

export const generateMetadata = ({params})=>{
  
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

  return {
    title: title
  }
}

const ItemSubCategorie = async({ params }) => {
  const info = await getDataPrueba(`https://testapi.tuentrada.com/api/v1/atencion-cliente/category/${params.categoria}/article/${params.subcategoria}`);
  const infoMostViews = await getDataPrueba(`https://testapi.tuentrada.com/api/v1/atencion-cliente/articles/most-view`);

  return (    
      <Articulo params={params} data={info?.data} dataArticle={info?.data?.article}  dataMostViews={infoMostViews?.data?.mostViews} />   
  );
};
export default ItemSubCategorie;