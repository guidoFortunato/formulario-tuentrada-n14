"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getDataPrueba } from "@/helpers/getInfoTest";
import { alertaWarning } from "@/helpers/Alertas";
import { Loader } from "../loading";

export const FormBusqueda = () => {
  const [slug, setSlug] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const router = useRouter();
  const panelRef = useRef();
  const [loading, setLoading] = useState(false);
  const searchTimer = useRef(null);
  const [error, setError] = useState(false);

  console.log({ data });
  // console.log({ isOpen });

  useEffect(() => {
    // Lógica de búsqueda
    const search = async () => {
      try {
        setLoading(true); // Activar indicador de carga
        if (value.length >= 3) {
          const res = await getDataPrueba(
            `https://testapi.tuentrada.com/api/v1/atencion-cliente/search-article/${value}`
          );
          console.log({ res });
          if (res.data.articles.length > 0) {
            setIsOpen(true);
            setError(false)
          } else {
            setIsOpen(false);
            setError(true)
          }
          setData(res.data.articles);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false); // Desactivar indicador de carga
      }
    };

    // Establecemos un temporizador para esperar a que el usuario deje de escribir
    clearTimeout(searchTimer.current);
    searchTimer.current = setTimeout(search, 1000); // Tiempo de espera en milisegundos
  }, [value]);

  // useEffect(() => {
  //   const handleOutsideClick = (event) => {
  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //       setIsOpen(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleOutsideClick);

  //   return () => {
  //     document.removeEventListener("mousedown", handleOutsideClick);
  //   };
  // }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        // Click outside the panel, close the autocomplete
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleChange = ( e ) => {
    setValue(e.target.value)
    setError(false)
  }

  const handleClick = (item) => {
    // console.log({ item });
    setIsOpen(false);
    setValue("");
    // setSlug(item.slug);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('enter')
    // if (!value.trim()) {
    //   alertaWarning();
    //   return;
    // }
    // console.log({ slug });
    // if (slug.length === 0) {
    //   alertaWarning("No se encontró el artículo");
    //   return;
    // }
    // console.log("se envia");
    setValue("");
    setIsOpen(false);
    // router.push("/tuentrada-wallet/" + slug);
  };

  return (
    <form onSubmit={onSubmit} className="relative">
      <div className="relative">
        <input
          className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-light "
          name="search"
          type="text"
          placeholder="Escribe un texto..."
          value={value}
          onChange={handleChange}
          autoComplete="off"
          disabled={loading}
        />
        {loading && <Loader />}
        


        {/* <button
          type="submit"
          className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-light rounded-e-lg border border-blue-light hover:bg-blue-dark hover:border-blue-dark "
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
        </button> */}
      </div>
      {error && <span className="text-red-500">no hay coincidencias para la palabra buscada</span>}
      {isOpen && (
        <div
          className="absolute w-[95%] md:w-[40%] bg-white z-10 rounded-lg shadow-xl mt-1 overflow-hidden border border-gray-200"
          ref={panelRef}
        >
          {data.map((item) => {
            // console.log({ item });
            return (
              <section key={item.id} >
                <ul>
                  <li>
                    <Link href={"/tuentrada-wallet/preguntas-frecuentes"} onClick={handleClick}>
                      <div className="flex justify-evenly items-center cursor-pointer hover:bg-blue-light hover:text-white gap-4 p-4 ">
                        <svg
                          className="w-3 h-3 mr-4"
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
                        <h3 className="text-sm font-semibold">{item.title}</h3>
                      </div>
                    </Link>
                  </li>
                </ul>
              </section>
            );
          })}
        </div>
      )}
    </form>
  );
};
