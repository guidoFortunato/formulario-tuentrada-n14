"use client";

import { useState } from "react";
import { alertaWarning } from "@/helpers/Alertas";
import { InputSelect } from "./InputSelect";
import { getDataPrueba } from "@/helpers/getInfoTest";

const InputBusqueda = () => {
  const [keyword, setKeyword] = useState("");
  const [articles, setArticles] = useState([]);

  const handleKeyword = (nombreKeyword) => {
    if (!nombreKeyword.trim()) {
      setKeyword("");
      return;
    }
    setKeyword(nombreKeyword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (keyword.length === 0) {
      alertaWarning();
      return;
    }
    if (keyword.length >= 3) {
      const info = await getDataPrueba(`https://testapi.tuentrada.com/api/v1/atencion-cliente/search-article/${keyword}`);
      console.log({info})
      info.data.articles.length > 0 && setArticles(info.data.articles)
      
    }

    // handleKeyword("");
    // console.log("click");
  };
  return (
    <>
      <div className="flex justify-center flex-col items-center my-10">
        <section className="flex justify-center items-center flex-col">
          <h1 className="text-[1.5rem] md:text-[2rem] text-blue-dark font-semibold mb-3">
            ¿Necesitás ayuda?
          </h1>
        </section>

        <form className="w-[95%] md:w-2/5" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pr-12 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-dark focus:border-blue-dark"
              placeholder="Buscar categoría, subcategoría..."
              value={keyword}
              onChange={(e) => handleKeyword(e.target.value)}
            />
            
            <button
              type="submit"
              className="absolute top-0 right-0 p-4 text-sm h-full text-white bg-gradient-to-r from-blue-light to-blue-dark hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:blue-dark  font-medium rounded-r-md"
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
          <InputSelect articles={articles} />
        </form>
      </div>
    </>
  );
};
export default InputBusqueda;
