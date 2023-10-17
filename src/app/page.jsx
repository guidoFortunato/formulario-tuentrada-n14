import CardCategoria from "@/components/CardCategoria";
import InputBusqueda from "@/components/InputBusqueda";

export default function Home() {
  return (
    <main className="container mx-auto py-10">
      <section className="flex justify-center items-center flex-col">
        <h1 className="text-[1.5rem] md:text-[2rem] text-blue-dark font-semibold mb-3">¿Necesitás ayuda?</h1>
        <InputBusqueda />
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6 mx-auto mt-8">
        <CardCategoria />
        <CardCategoria />
        <CardCategoria />
        <CardCategoria />
        <CardCategoria />
        <CardCategoria />
      </section>
    </main>
  );
}
