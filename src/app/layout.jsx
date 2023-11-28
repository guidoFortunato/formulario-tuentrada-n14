import { Inter } from "next/font/google";
import NavBar from "@/components/header/Navbar";
import Footer from "@/components/footer/Footer";
import { getDataCache, getDataPrueba } from "@/helpers/getInfoTest";
import InputBusqueda2 from "@/components/header/InputBusqueda2";
import FormProvider from "@/context/FormContext";
import InputBusqueda from "@/components/header/InputBusqueda";

const inter = Inter({ subsets: ["latin"] });

import "./globals.css";

export const metadata = {
  title: "Ayuda TuEntrada - Home",
  description: "Página de ayuda para los clientes",
};

export default async function RootLayout({ children }) {

  const infoCache = await getDataCache(`https://testapi.tuentrada.com/api/v1/site/ayuda.tuentrada.com`);


  const dataCache = infoCache.data.products.data;
  // console.log({data})
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
