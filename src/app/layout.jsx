import NavBar from "@/components/header/Navbar";
import Footer from "@/components/footer/Footer";
import { getDataCache } from "@/helpers/getInfoTest";
import InputBusqueda2 from "@/components/header/InputBusqueda2";
import FormProvider from "@/context/FormContext";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Ayuda TuEntrada - Home",
  description: "Página de ayuda para los clientes",
};

export default async function RootLayout({ children }) {

  const infoCache = await getDataCache(`https://testapi.tuentrada.com/api/v1/site/ayuda.tuentrada.com`);
  
//  console.log({infoCache: infoCache.data})


  const dataCache = infoCache.data?.site;
  // console.log({dataCache})
  return (
    <html lang="es">
      
      <body
        className={`${inter.className} flex flex-col min-h-[100vh] m-0`}
        suppressHydrationWarning={true}
      >
        <FormProvider>
          <header>
            <NavBar data={dataCache} />
            <InputBusqueda2 data={dataCache} />
            {/* <InputBusqueda data={data} /> */}
          </header>
          {children}
          <Footer data={dataCache} />
        </FormProvider>
        
      </body>
    </html>
  );
}
