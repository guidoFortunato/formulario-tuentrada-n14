import CardCategoria from "@/components/main/CardCategoria";
import InputBusqueda from "@/components/header/InputBusqueda";
import { getDataPrueba } from "@/helpers/getInfoTest";

export default async function Home() {
  const info = await getDataPrueba(
    "https://testapi.tuentrada.com/api/v1/atencion-cliente/categories"
  );
  // console.log({ info: info.data.categories });
  const { categories } = info.data;
  console.log({ categories });
  return (
    <main>
      <InputBusqueda />
      <div className="container mx-auto bg-main-image bg-no-repeat bg-left-50 pb-10 flex-1">
        <section className="w-[80%] grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 mx-auto mt-4">
          {/* <CardCategoria color={"blue"} title={"Devoluciones"} slug={"devoluciones"} />
          <CardCategoria color={"blue"} title={"Devoluciones"} slug={"devoluciones"} /> */}
          {categories.map((item) => (
            <CardCategoria
              color={item.color}
              title={item.name}
              slug={item.slug}
              key={item.id}
              description={item.refenrece}
              icon={item.svg}
            />
          ))}
        </section>
        {/* <section className="w-[80%] grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-4 mx-auto mt-8">
          <CardCategoria
            color={"pink"}
            title={"Inicio sesión"}
            slug={"inicio-sesion"}
          />
          <CardCategoria color={"pink"} title={"Wallet"} slug={"wallet"} />
        </section>
        <section className="w-[80%] grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-4 mx-auto mt-8">
          <CardCategoria
            color={"azul"}
            title={"Devoluciones"}
            slug={"devoluciones"}
          />
          <CardCategoria
            color={"azul"}
            title={"Inicio sesión"}
            slug={"inicio-sesion"}
          />
          <CardCategoria color={"azul"} title={"Wallet"} slug={"wallet"} />
        </section> */}
      </div>
    </main>
  );
}
