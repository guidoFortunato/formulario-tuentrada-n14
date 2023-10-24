import CardCategoria from "@/components/main/CardCategoria";
import InputBusqueda from "@/components/header/InputBusqueda";

export default function Home() {
  return (
    <main>
      <InputBusqueda />
      <div className="container mx-auto bg-main-image bg-no-repeat bg-left-50 pb-10 flex-1">
        
        <section className="w-[80%] grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-4 mx-auto mt-8">
          <CardCategoria color={"blue"} title={"Devoluciones"} slug={"devoluciones"} />
          <CardCategoria color={"blue"} title={"Inicio sesión"} slug={"inicio-sesion"} />
          <CardCategoria color={"blue"} title={"Wallet"} slug={"wallet"} />
        </section>
        <section className="w-[80%] grid grid-cols-1 justify-items-center mx-auto mt-4">
          <CardCategoria color={"pink"} title={"Error en tarjeta"} slug={"error-tarjeta"} />
        </section>
        <section className="w-[80%] grid grid-cols-1 md:grid-cols-2  justify-items-center gap-4 mx-auto mt-4">
          <CardCategoria color={"blue"} title={"Devoluciones"} slug={"devoluciones"} />
          <CardCategoria color={"blue"} title={"Devoluciones"} slug={"devoluciones"} />
        </section>
      </div>
    </main>
  );
}
