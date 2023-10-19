const InputBusqueda = () => {
  return (
    <>
    <div className="flex justify-center flex-col items-center my-10">
    <section className="flex justify-center items-center flex-col">
    <h1 className="text-[1.5rem] md:text-[2rem] text-blue-dark font-semibold mb-3">
      ¿Necesitás ayuda?
    </h1>
  </section>
  
    <form className="w-[95%] md:w-2/5 ">
      <div className="relative">
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 pr-12 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-dark focus:border-blue-dark"
          placeholder="Buscar categoría, subcategoría..."
          required
        />
        <button
          type="submit"
          className="absolute top-0 right-0 p-4 text-sm font-medium h-full text-white bg-gradient-to-b from-blue-light to-blue-dark rounded-r-lg border border-gray-300  focus:border-blue-dark  focus:ring-blue-dark"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </div>
    </form>
    </div>
    </>
  );
};
export default InputBusqueda;
