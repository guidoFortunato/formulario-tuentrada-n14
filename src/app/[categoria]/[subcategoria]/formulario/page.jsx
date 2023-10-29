// import Form1 from "@/components/formulario/Form1";
import Form2 from "@/components/formulario/Form2";
import InputBusqueda from "@/components/header/InputBusqueda";
// import getData from "@/helpers/getData";
import { getDataPrueba, getTokenPrueba } from "@/helpers/getInfoTest";


<<<<<<< HEAD
  useEffect(() => {
   
      const getInfo = async () => {
        const data = await getData(
          "https://testapi.tuentrada.com/api/v1/site/venues.tuentrada.com",
          "gfortunato@tuentrada.com",
          "Correa.3030"
        );
        console.log({data})
        // setData(data);
      };
      getInfo();
    
  }, []);
=======

async function FormPage(){
  
  // const info = await getDataPrueba("https://testapi.tuentrada.com/api/v1/atencion-cliente/categories")//https://testapi.tuentrada.com/api/v1/ayuda.tuentrada.com
  // console.log({info: info.data.products })
  // console.log({info: info.data.categories })

  const dataToken = await getTokenPrueba()
  const { token, tokenExpires  } = dataToken
  console.log({ token, tokenExpires  })
  console.log(new Date().times)
>>>>>>> 138fbb8fc2273bb5e7307838b16db1405ff48559
  return (
    <>
      <InputBusqueda />
      {/* <Form1 /> */}
      <Form2 />
    </>
  );
};

export default FormPage;
