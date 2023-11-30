import { getDataPrueba } from "@/helpers/getInfoTest";


export default async function sitemap() {
    const request = await getDataPrueba("https://testapi.tuentrada.com/api/v1/atencion-cliente/sitemap/ayuda.tuentrada.com");
  
    const posts = request.data.map( item => {
      return {
        url: item.site,
        lastModified: item.date
      }
    } )


  // We generate the XML sitemap with the posts data

  return [
   ...posts
  ];
}
